import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { RefObject, useContext } from 'react';
import { useStore } from '../../store/StoreProvider';
import { IExtendedPeriod } from '../../interfaces/content';
import { AppContext } from '../../AppContext';

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

const PeriodName = styled.h3`
  display: flex;
  align-items: center;
  width: 0;
  height: 0;
  opacity: 0;
  font-size: var(--font-size);
  font-weight: bold;
  line-height: 1.5;

  input:checked ~ & {
    position: absolute;
    left: calc(100% + 20px);
    padding: 0;
    margin: 0;
    width: auto;
    height: auto;
    box-sizing: border-box;
    text-align: right;
  }
`;

const PeriodButton = observer(
  ({
    periodNumber: number,
    index: i,
    forwardedRefs,
  }: {
    periodNumber: number;
    index: number;
    forwardedRefs: {
      itemsRef: RefObject<HTMLDivElement[]>;
      previousPeriodRef: RefObject<IExtendedPeriod>;
      periodNameRef: RefObject<{
        previous: HTMLHeadingElement;
        current: HTMLHeadingElement;
      }>;
    };
  }) => {
    const { blockStore } = useStore();
    const { isCompact } = useContext(AppContext);

    return (
      <PeriodButtonWrapper
        ref={(el) => {
          forwardedRefs.itemsRef.current[i] = el!;
        }}
      >
        <PeriodInput
          id={`${blockStore.blockID}-${number}`}
          type="radio"
          name="circle"
          value={number}
          checked={blockStore.period.number === number}
          onChange={() => {
            forwardedRefs.previousPeriodRef.current = blockStore.period;
            blockStore.setPeriod({ number });
          }}
        />
        <StyledPeriodButton htmlFor={`${blockStore.blockID}-${number}`}>
          {number}
        </StyledPeriodButton>
        {!isCompact &&
          (blockStore.period.number === number ||
            forwardedRefs.previousPeriodRef.current.number === number) && (
            <PeriodName
              ref={(el) => {
                if (blockStore.period.number === number && el) {
                  forwardedRefs.periodNameRef.current.previous =
                    forwardedRefs.periodNameRef.current.current;
                  forwardedRefs.periodNameRef.current.current = el;
                }
              }}
            >
              {forwardedRefs.previousPeriodRef.current.number === number
                ? forwardedRefs.previousPeriodRef.current.name
                : blockStore.period.name}
            </PeriodName>
          )}
      </PeriodButtonWrapper>
    );
  },
);

export default PeriodButton;
