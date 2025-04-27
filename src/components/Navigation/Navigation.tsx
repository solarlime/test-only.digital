import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { RefObject, useContext } from 'react';
import { useStore } from '../../store/StoreProvider';
import { AppContext } from '../../AppContext';
import PeriodButtons from './PeriodButtons';
import NavigationLabel from './NavigationLabel';
import ArrowButtons from './ArrowButtons';

const NavigationButtons = styled.div`
  display: flex;
`;

const StyledNavigation = styled.div`
  align-self: flex-start;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    order: 1;
    margin-top: 40px;
    padding: 0 var(--padding-outer);
  }
`;

const PeriodName = styled.h3`
  flex-basis: 25%;
  padding: 0;
  margin: 0;
  font-size: var(--font-size);
  font-weight: bold;
  line-height: 1.5;
  box-sizing: border-box;
  text-align: right;
`;

const Navigation = observer(
  ({ forwardedRef }: { forwardedRef: RefObject<HTMLDivElement[]> }) => {
    const { blockStore } = useStore();
    const { isCompact } = useContext(AppContext);

    return (
      <StyledNavigation>
        <NavigationLabel />
        <NavigationButtons>
          <ArrowButtons />
          <PeriodButtons forwardedRef={forwardedRef} />
          {!isCompact && <PeriodName>{blockStore.period.name}</PeriodName>}
        </NavigationButtons>
      </StyledNavigation>
    );
  },
);

export default Navigation;
