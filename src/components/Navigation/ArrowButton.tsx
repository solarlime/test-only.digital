import styled, { css } from 'styled-components';
import { observer } from 'mobx-react-lite';
import { ComponentProps } from 'react';
import EllipsisButton from '../shared/EllipsisButton';
import { useStore } from '../../store/StoreProvider';
import Arrow from '../../assets/arrow.svg?react';

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

const ArrowButton = observer((props: ComponentProps<typeof EllipsisButton>) => {
  const { blockStore } = useStore();

  return (
    blockStore.hasContent && (
      <StyledArrowButton
        type="button"
        onClick={() => {
          blockStore.setPeriod({ next: props.name === 'right' });
        }}
        disabled={
          (props.name === 'left' && blockStore.period.number === 0) ||
          (props.name === 'right' &&
            blockStore.period.number === blockStore.maxPeriod)
        }
        {...props}
      >
        <Arrow />
      </StyledArrowButton>
    )
  );
});

export default ArrowButton;
