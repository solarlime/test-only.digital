import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/StoreProvider';
import Number from './Number';

const StyledNumbers = styled.ul`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  z-index: -1;

  @media screen and (max-width: 500px) {
    position: static;
    align-self: flex-start;
    width: auto;
    height: auto;
    margin: 56px 0;
    padding: 0 var(--padding-outer);
  }
`;

const Numbers = observer(() => {
  const { blockStore } = useStore();

  return (
    <StyledNumbers>
      <Number colors={{ compact: 'var(--blue)', rest: 'var(--iris)' }}>
        {blockStore.period.from}
      </Number>
      <Number colors={{ compact: 'var(--pink)', rest: 'var(--fuschia)' }}>
        {blockStore.period.to}
      </Number>
    </StyledNumbers>
  );
});

export default Numbers;
