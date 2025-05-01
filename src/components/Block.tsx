import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useStore } from '../store/StoreProvider';
import { AppContext } from '../AppContext';
import Dates from './Dates/Dates';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Circle from './Circle/Circle';
import Numbers from './Numbers/Numbers';
import DatesHorizontalLine from './Dates/DatesHorizontalLine';
import CircleHorizontalLine from './Circle/CircleHorizontalLine';
import VerticalLine from './shared/VerticalLine';

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: auto;
  max-width: 1440px;
  padding: 100px 0;
  box-sizing: border-box;

  @media screen and (max-width: 1300px) {
    padding: 70px 0;
  }

  @media screen and (max-width: 800px) {
    padding: 40px 0;
  }

  @media screen and (max-width: 500px) {
    align-items: flex-start;
    padding: 59px 0;
  }
`;

const VerticalLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-width: 0 1px;
  border-style: solid;
  border-color: color-mix(in srgb, var(--dove) 10%, transparent);
  opacity: 0.5;
  z-index: -1;
`;

const CircleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
  min-height: var(--min-block-height);
  padding: 0 var(--padding-outer);
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    min-height: unset;
    padding: 0;
  }
`;

const HeaderWrapper = styled.div`
  flex-basis: 40%;
  width: 100%;
`;

const PeriodName = styled.h3`
  align-self: flex-start;
  padding: 0 var(--padding-outer);
  margin: 0;
  font-size: var(--font-size);
  font-weight: bold;
  line-height: 1.5;
  box-sizing: border-box;
`;

const Block = observer(() => {
  const { blockStore } = useStore();
  const { isCompact } = useContext(AppContext);
  const { 0: pathElement, 1: setPathElement } = useState<SVGPathElement | null>(
    null,
  );

  const circleRef = useCallback((node: SVGPathElement | null) => {
    if (node) setPathElement(node);
  }, []);

  useEffect(() => {
    blockStore.getContent();
  }, []);

  return (
    <>
      {!blockStore.hasContent && (
        <Main>
          <CircleWrapper>
            <HeaderWrapper>
              <Header>
                Исторические <br />
                даты
              </Header>
            </HeaderWrapper>
            <Circle />
            <CircleHorizontalLine />
          </CircleWrapper>
          <DatesHorizontalLine />
          <Dates />
          <VerticalLines>
            <VerticalLine />
          </VerticalLines>
        </Main>
      )}
      {blockStore.hasContent && (
        <Main>
          <CircleWrapper>
            <HeaderWrapper>
              <Header>
                Исторические <br />
                даты
              </Header>
            </HeaderWrapper>
            <Numbers />
            {!isCompact && <Navigation pathElement={pathElement} />}
            {isCompact && <PeriodName>{blockStore.period.name}</PeriodName>}
            <Circle ref={circleRef} />
            <CircleHorizontalLine />
          </CircleWrapper>
          {isCompact && <Navigation pathElement={pathElement} />}
          <DatesHorizontalLine />
          <Dates />
          <VerticalLines>
            <VerticalLine />
          </VerticalLines>
        </Main>
      )}
    </>
  );
});

export default Block;
