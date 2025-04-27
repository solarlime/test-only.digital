import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/StoreProvider';
import Number from './Number';

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
