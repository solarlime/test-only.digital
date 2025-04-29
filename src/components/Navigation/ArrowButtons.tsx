import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import ArrowButton from './ArrowButton';
import { RefObject } from 'react';
import { IExtendedPeriod } from '../../interfaces/content';

const StyledArrowButtons = styled.div`
  display: flex;
  flex-basis: 25%;
`;

const ArrowButtons = observer(
  ({ forwardedRef }: { forwardedRef: RefObject<IExtendedPeriod> }) => {
    return (
      <StyledArrowButtons>
        <ArrowButton name="left" forwardedRef={forwardedRef} />
        <ArrowButton name="right" forwardedRef={forwardedRef} />
      </StyledArrowButtons>
    );
  },
);

export default ArrowButtons;
