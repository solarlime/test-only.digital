import styled from 'styled-components';
import Dates from './components/Dates/Dates';
import CircleController from './CircleController';
import Header from './components/Header/Header';
import { StoreProvider, useStore } from './store/StoreProvider';
import Store from './store/store';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Circle from './Circle';
import { AppContext } from './AppContext';
import Numbers from './Numbers';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

const Main = styled.main`
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

const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: color-mix(in srgb, var(--dove) 10%, transparent);

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const HorizontalLine = styled.div`
  height: 1px;
  width: 100%;
`;

const CircleHorizontalLine = styled(HorizontalLine)`
  position: absolute;
  top: calc(50% - 0.5px);
  background-color: color-mix(in srgb, var(--dove) 10%, transparent);

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const DatesHorizontalLine = styled(HorizontalLine)`
  visibility: hidden;
  width: calc(100% - 2 * var(--padding-outer));
  margin: 20px var(--padding-outer);
  background: #c7cdd9;

  @media screen and (max-width: 1000px) {
    visibility: visible;
  }
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

const H3 = styled.h3`
  align-self: flex-start;
  padding: 0 var(--padding-outer);
  margin: 0;
  font-size: var(--font-size);
  font-weight: bold;
  line-height: 1.5;
  box-sizing: border-box;
`;

gsap.registerPlugin(MotionPathPlugin);

const offsetAngle = -60;
const progressOffset = offsetAngle / 360;

const Block = observer(() => {
  const { blockStore } = useStore();
  const { isCompact } = useContext(AppContext);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [pathElement, setPathElement] = useState<SVGPathElement | null>(null);

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
    console.log(items, pathElement);

    items.forEach((item, i) => {
      const progress = (progressOffset + i / count) % 1;
      gsap.to(item, {
        motionPath: {
          path: pathElement,
          align: pathElement,
          alignOrigin: [0.5, 0.5],
          start: progress,
          end: progress,
          autoRotate: false,
        },
        duration: 0.5,
      });
    });
  }, [pathElement]);

  return (
    blockStore.period && (
      <Main>
        <CircleWrapper>
          <HeaderWrapper>
            <Header>
              Исторические <br />
              даты
            </Header>
          </HeaderWrapper>
          <Numbers />
          {!isCompact && <CircleController ref={itemsRef} />}
          {isCompact && <H3>{blockStore.period.name}</H3>}
          <Circle ref={circleRef} />
          <CircleHorizontalLine />
        </CircleWrapper>
        {isCompact && <CircleController ref={itemsRef} />}
        <DatesHorizontalLine />
        <Dates scope={blockStore.period} />
        <VerticalLines>
          <VerticalLine />
        </VerticalLines>
      </Main>
    )
  );
});

// eslint-disable-next-line mobx/missing-observer
const App = () => {
  return (
    <>
      <StoreProvider value={new Store()}>
        <Block />
      </StoreProvider>
    </>
  );
};

export default App;
