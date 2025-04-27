import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { RefObject } from 'react';
import { useStore } from '../../store/StoreProvider';

const StyledPeriodButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--dove);
  opacity: 1;
  cursor: pointer;
  overflow: hidden;
  transition: all 1s;

  @media screen and (max-width: 500px) {
    width: 6px;
    height: 6px;
    opacity: 0.4;
  }

  &:hover,
  input:checked + & {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: var(--white);
    border: 1px solid var(--dove);
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      opacity: 1;
      width: 6px;
      height: 6px;
      border: 0;
      background: var(--dove);
    }
  }
`;

const PeriodButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  & > ${StyledPeriodButton} {
    transform: scale(0.107);

    @media screen and (max-width: 500px) {
      transform: none;
    }
  }

  &:hover,
  &:has(input:checked) {
    & > ${StyledPeriodButton} {
      transform: scale(1);

      @media screen and (max-width: 500px) {
        transform: none;
      }
    }
  }

  @media screen and (max-width: 500px) {
    position: static;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const PeriodInput = styled.input`
  position: absolute;
  top: 0;
  left: -9999px;
`;

const PeriodButton = observer(
  ({
    periodNumber: number,
    index: i,
    forwardedRef: itemsRef,
  }: {
    periodNumber: number;
    index: number;
    forwardedRef: RefObject<HTMLDivElement[]>;
  }) => {
    const { blockStore } = useStore();

    return (
      <PeriodButtonWrapper
        ref={(el) => {
          itemsRef.current[i] = el!;
        }}
      >
        <PeriodInput
          id={`${blockStore.blockID}-${number}`}
          type="radio"
          name="circle"
          value={number}
          checked={blockStore.period.number === number}
          onChange={() => {
            blockStore.setPeriod({ number });
          }}
        />
        <StyledPeriodButton htmlFor={`${blockStore.blockID}-${number}`}>
          {number}
        </StyledPeriodButton>
      </PeriodButtonWrapper>
    );
  },
);

export default PeriodButton;
