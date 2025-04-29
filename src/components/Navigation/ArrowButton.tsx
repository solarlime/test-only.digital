import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { RefObject } from 'react';
import EllipsisButton from '../shared/EllipsisButton';
import { useStore } from '../../store/StoreProvider';
import Arrow from '../../assets/arrow.svg?react';
import { IExtendedPeriod } from '../../interfaces/content';

const StyledArrowButton = styled(EllipsisButton)`
  &:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (max-width: 500px) {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  ${(props) =>
    props.name === 'right' &&
    css`
      transform: rotate(180deg);
    `}
`;

const ArrowButton = observer(
  ({
    name,
    forwardedRef: previousPeriodRef,
  }: {
    name: 'left' | 'right';
    forwardedRef: RefObject<IExtendedPeriod>;
  }) => {
    const { blockStore } = useStore();

    return (
      blockStore.hasContent && (
        <StyledArrowButton
          type="button"
          name={name}
          onClick={() => {
            previousPeriodRef.current = blockStore.period;
            blockStore.setPeriod({ next: name === 'right' });
          }}
          disabled={
            (name === 'left' && blockStore.period.number === 1) ||
            (name === 'right' &&
              blockStore.period.number === blockStore.maxPeriod)
          }
        >
          <Arrow />
        </StyledArrowButton>
      )
    );
  },
);

export default ArrowButton;
