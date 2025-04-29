import styled from 'styled-components';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';
import { observer } from 'mobx-react-lite';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
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
import { IExtendedPeriod } from '../interfaces/content';

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: var(--min-block-height);
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
    min-height: 0;
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
  min-height: 70vh;
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

gsap.registerPlugin(MotionPathPlugin);

const offsetAngle = -30;
const shift = offsetAngle / 360;

const Block = observer(() => {
  const { blockStore } = useStore();
  const { isCompact } = useContext(AppContext);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const previousPeriodRef = useRef<IExtendedPeriod>({} as IExtendedPeriod);
  const { 0: pathElement, 1: setPathElement } = useState<SVGPathElement | null>(
    null,
  );

  const circleRef = useCallback((node: SVGPathElement | null) => {
    if (node) setPathElement(node);
  }, []);

  useEffect(() => {
    blockStore.getContent();
  }, []);

  useGSAP(() => {
    if (isCompact) return;
    if (!pathElement) return;
    const items = itemsRef.current;
    const count = items.length;

    items.forEach((item, i) => {
      const progress = shift - i / count;
      gsap.to(item, {
        motionPath: {
          path: pathElement,
          align: pathElement,
          alignOrigin: [0.5, 0.5],
          start: progress,
          end: progress,
          autoRotate: false,
        },
        duration: 0,
      });
    });
  }, [pathElement]);

  useGSAP(() => {
    if (isCompact) return;
    if (!pathElement) return;
    const items = itemsRef.current;
    const count = items.length;
    const progressOffset = 1 / count;

    items.forEach((item, i) => {
      const progressStart =
        shift +
        progressOffset * (previousPeriodRef.current!.number - 1) -
        i / count;
      const progressEnd =
        shift + progressOffset * (blockStore.period.number - 1) - i / count;
      gsap.to(item, {
        motionPath: {
          path: pathElement,
          align: pathElement,
          alignOrigin: [0.5, 0.5],
          start: progressStart,
          end: progressEnd,
          autoRotate: false,
        },
        ease: 'power1.inOut',
        duration: 1,
      });
    });
  }, [blockStore.period?.number]);

  return (
    blockStore.hasContent && (
      <Main>
        <CircleWrapper>
          <HeaderWrapper>
            <Header>
              Исторические <br />
              даты
            </Header>
          </HeaderWrapper>
          <Numbers />
          {!isCompact && (
            <Navigation forwardedRefs={{ itemsRef, previousPeriodRef }} />
          )}
          {isCompact && <PeriodName>{blockStore.period.name}</PeriodName>}
          <Circle ref={circleRef} />
          <CircleHorizontalLine />
        </CircleWrapper>
        {isCompact && (
          <Navigation forwardedRefs={{ itemsRef, previousPeriodRef }} />
        )}
        <DatesHorizontalLine />
        <Dates />
        <VerticalLines>
          <VerticalLine />
        </VerticalLines>
      </Main>
    )
  );
});

export default Block;
