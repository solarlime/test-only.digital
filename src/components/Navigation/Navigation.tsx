import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { RefObject } from 'react';
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

const Navigation = observer(
  ({ forwardedRef }: { forwardedRef: RefObject<HTMLDivElement[]> }) => {
    return (
      <StyledNavigation>
        <NavigationLabel />
        <NavigationButtons>
          <ArrowButtons />
          <PeriodButtons forwardedRef={forwardedRef} />
        </NavigationButtons>
      </StyledNavigation>
    );
  },
);

export default Navigation;
