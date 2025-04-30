import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { RefObject } from 'react';
import PeriodButtons from './PeriodButtons';
import NavigationLabel from './NavigationLabel';
import ArrowButtons from './ArrowButtons';
import { IExtendedPeriod } from '../../interfaces/content';

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
  ({
    forwardedRefs,
  }: {
    forwardedRefs: {
      itemsRef: RefObject<HTMLDivElement[]>;
      previousPeriodRef: RefObject<IExtendedPeriod>;
      periodNameRef: RefObject<{
        previous: HTMLHeadingElement;
        current: HTMLHeadingElement;
      }>;
    };
  }) => {
    return (
      <StyledNavigation>
        <NavigationLabel />
        <NavigationButtons>
          <ArrowButtons forwardedRef={forwardedRefs.previousPeriodRef} />
          <PeriodButtons forwardedRefs={forwardedRefs} />
        </NavigationButtons>
      </StyledNavigation>
    );
  },
);

export default Navigation;
