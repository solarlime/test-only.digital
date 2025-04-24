import styled from 'styled-components';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useStore } from './store/StoreProvider';
import { observer } from 'mobx-react-lite';

const StyledNumbers = styled.ul`
  display: flex;
  padding: 0;
  margin: 40px 0;
  z-index: 1;

  @media screen and (max-width: 500px) {
    align-self: flex-start;
    margin: 56px 0;
    padding: 0 var(--padding-outer);
  }
`;

const Number = styled.li`
  flex-shrink: 0;
  list-style-type: none;
  font-weight: bold;
  font-size: var(--font-size-numbers);
  line-height: 160px;
  letter-spacing: calc(1em / -50);

  &:not(:last-child) {
    margin-right: calc(var(--font-size-numbers) / 2);
  }

  @media screen and (max-width: 1300px) {
    line-height: normal;
  }
`;

const IrisNumber = styled(Number)`
  color: var(--iris);

  @media screen and (max-width: 500px) {
    color: var(--blue);
  }
`;

const FuschiaNumber = styled(Number)`
  color: var(--fuschia);

  @media screen and (max-width: 500px) {
    color: var(--pink);
  }
`;

gsap.registerPlugin(useGSAP);

const Numbers = observer(() => {
  const { blockStore } = useStore();
  const fromRef = useRef<HTMLLIElement>(null);
  const toRef = useRef<HTMLLIElement>(null);
  const fromValueProxy = useRef({ value: blockStore.period.from });
  const toValueProxy = useRef({ value: blockStore.period.to });

  useGSAP(() => {
    gsap.to(fromValueProxy.current, {
      value: blockStore.period.from,
      duration: 1,
      snap: {
        value: 1,
      },
      onUpdate: () => {
        if (fromRef.current)
          fromRef.current.textContent = fromValueProxy.current.value.toString();
      },
    });
    gsap.to(toValueProxy.current, {
      value: blockStore.period.to,
      duration: 1,
      snap: {
        value: 1,
      },
      onUpdate: () => {
        if (toRef.current)
          toRef.current.textContent = toValueProxy.current.value.toString();
      },
    });
  }, [blockStore.period.from, blockStore.period.to]);

  return (
    <StyledNumbers>
      <IrisNumber ref={fromRef}>{blockStore.period.from}</IrisNumber>
      <FuschiaNumber ref={toRef}>{blockStore.period.to}</FuschiaNumber>
    </StyledNumbers>
  );
});

export default Numbers;
