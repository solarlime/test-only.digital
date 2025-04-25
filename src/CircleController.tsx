import styled from 'styled-components';
import EllipsisButton from './components/shared/EllipsisButton';
import Arrow from './assets/arrow.svg?react';
import { observer } from 'mobx-react-lite';
import { useStore } from './store/StoreProvider';
import { RefObject } from 'react';

const Buttons = styled.div`
  display: flex;
`;

const CircleButtons = styled.div`
  display: flex;
  flex-basis: 25%;
`;

const CircleBackButton = styled(EllipsisButton)`
  margin-right: 20px;

  @media screen and (max-width: 500px) {
    margin-right: 8px;
  }
`;

const CircleNextButton = styled(EllipsisButton)`
  transform: rotate(180deg);
`;

const StyledCircleController = styled.div`
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

const Label = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  line-height: normal;

  @media screen and (max-width: 500px) {
    margin: 0 0 11px;
  }
`;

const NavButtons = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  display: flex;
  flex-basis: 50%;
  justify-content: center;
`;

const NavButton = styled.label`
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

const NavButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  & > ${NavButton} {
    transform: scale(0.107);

    @media screen and (max-width: 500px) {
      transform: none;
    }
  }

  &:hover,
  &:has(input:checked) {
    & > ${NavButton} {
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

const NavInput = styled.input`
  position: absolute;
  top: 0;
  left: -9999px;
`;

const CircleController = observer(
  ({ ref: itemsRef }: { ref: RefObject<HTMLDivElement[]> }) => {
    const { blockStore } = useStore();

    return (
      <StyledCircleController>
        {blockStore.period && (
          <>
            <Label>
              {`${blockStore.period.number < 10 ? '0' : ''}${blockStore?.period.number}`}
              /
              {`${blockStore.maxPeriod < 10 ? '0' : ''}${blockStore.maxPeriod}`}
            </Label>
            <Buttons>
              <CircleButtons>
                <CircleBackButton
                  type="button"
                  onClick={() => {
                    blockStore.setPeriod({ next: false });
                  }}
                  disabled={blockStore.period.number === 0}
                >
                  <Arrow />
                </CircleBackButton>
                <CircleNextButton
                  type="button"
                  onClick={() => {
                    blockStore.setPeriod({ next: true });
                  }}
                  disabled={blockStore.period.number === blockStore.maxPeriod}
                >
                  <Arrow />
                </CircleNextButton>
              </CircleButtons>
              <NavButtons>
                {blockStore.periodNumbers.map((number, i) => {
                  return (
                    <NavButtonContainer
                      key={`${blockStore.blockID}-${number}`}
                      ref={(el) => {
                        itemsRef.current[i] = el!;
                      }}
                    >
                      <NavInput
                        id={`${blockStore.blockID}-${number}`}
                        type="radio"
                        name="circle"
                        value={number}
                        checked={blockStore.period.number === number}
                        onChange={() => {
                          blockStore.setPeriod({ number });
                        }}
                      />
                      <NavButton htmlFor={`${blockStore.blockID}-${number}`}>
                        {number}
                      </NavButton>
                    </NavButtonContainer>
                  );
                })}
              </NavButtons>
            </Buttons>
          </>
        )}
      </StyledCircleController>
    );
  },
);

export default CircleController;
