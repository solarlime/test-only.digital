import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/StoreProvider';

const StyledNavigationLabel = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  line-height: normal;

  @media screen and (max-width: 500px) {
    margin: 0 0 11px;
  }
`;

const NavigationLabel = observer(() => {
  const { blockStore } = useStore();

  return (
    blockStore.hasContent && (
      <StyledNavigationLabel>
        {`${blockStore.period.number < 10 ? '0' : ''}${blockStore?.period.number}`}
        /{`${blockStore.maxPeriod < 10 ? '0' : ''}${blockStore.maxPeriod}`}
      </StyledNavigationLabel>
    )
  );
});

export default NavigationLabel;
