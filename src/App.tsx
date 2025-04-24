import styled from 'styled-components';
import Dates from './components/Dates/Dates';
import CircleController from './CircleController';
import Header from './components/Header/Header';
import { StoreProvider, useStore } from './store/StoreProvider';
import Store from './store/store';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Circle from './assets/circle.svg?react';
import { AppContext } from './AppContext';
import Numbers from './Numbers';

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  height: 100dvh;
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
    height: auto;
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
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 var(--padding-outer);
  box-sizing: border-box;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

const StyledCircle = styled(Circle)`
  position: absolute;
  top: 10%;
  height: 80%;
  aspect-ratio: 1;
  max-width: 100%;

  @media screen and (max-width: 800px) {
    padding: 0 var(--padding-outer);
    box-sizing: border-box;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  flex-basis: 40%;
  width: 100%;
`;

const Block = observer(() => {
  const { blockStore } = useStore();
  const { isCompact } = useContext(AppContext);

  useEffect(() => {
    blockStore.getContent();
  }, []);

  return (
    <Main>
      <CircleWrapper>
        <HeaderWrapper>
          <Header>
            Исторические <br />
            даты
          </Header>
        </HeaderWrapper>
        {blockStore.period.from && blockStore.period.to && <Numbers />}
        {!isCompact && <CircleController />}
        <StyledCircle />
        <CircleHorizontalLine />
      </CircleWrapper>
      {isCompact && <CircleController />}
      <DatesHorizontalLine />
      {blockStore.period.dates && <Dates scope={blockStore.period} />}
      <VerticalLines>
        <VerticalLine />
      </VerticalLines>
    </Main>
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
