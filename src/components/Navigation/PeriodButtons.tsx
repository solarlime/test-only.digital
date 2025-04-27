import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { RefObject } from 'react';
import { useStore } from '../../store/StoreProvider';
import PeriodButton from './PeriodButton';

const StyledPeriodButtons = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  display: flex;
  flex-basis: 50%;
  justify-content: center;
`;

const PeriodButtons = observer(
  ({ forwardedRef }: { forwardedRef: RefObject<HTMLDivElement[]> }) => {
    const { blockStore } = useStore();

    return (
      blockStore.hasContent && (
        <StyledPeriodButtons>
          {blockStore.periodNumbers.map((number, i) => {
            return (
              <PeriodButton
                key={`${blockStore.blockID}-${number}`}
                periodNumber={number}
                index={i}
                forwardedRef={forwardedRef}
              />
            );
          })}
        </StyledPeriodButtons>
      )
    );
  },
);

export default PeriodButtons;
