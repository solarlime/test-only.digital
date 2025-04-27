import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';

const StyledNumber = styled.li<{ colors?: { compact: string; rest: string } }>`
  flex-shrink: 0;
  list-style-type: none;
  font-weight: bold;
  font-size: var(--font-size-numbers);
  line-height: 160px;
  letter-spacing: calc(1em / -50);

  ${(props) =>
    props.colors &&
    css`
      color: ${props.colors.rest};

      @media screen and (max-width: 500px) {
        color: ${props.colors.compact};
      }
    `}

  &:not(:last-child) {
    margin-right: calc(var(--font-size-numbers) / 2);
  }

  @media screen and (max-width: 1300px) {
    line-height: normal;
  }
`;

gsap.registerPlugin(useGSAP);

const Number = observer(
  ({
    children,
    colors,
  }: {
    children: number;
    colors?: { compact: string; rest: string };
  }) => {
    const numberRef = useRef<HTMLLIElement>(null);
    const numberValueProxy = useRef({ value: children });

    useGSAP(() => {
      gsap.to(numberValueProxy.current, {
        value: children,
        duration: 1,
        snap: {
          value: 1,
        },
        onUpdate: () => {
          if (numberRef.current)
            numberRef.current.textContent =
              numberValueProxy.current.value.toString();
        },
      });
    }, [children]);

    return (
      <StyledNumber colors={colors} ref={numberRef}>
        {children}
      </StyledNumber>
    );
  },
);

export default Number;
