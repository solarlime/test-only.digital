import styled from 'styled-components';
import Dates from './components/Dates/Dates';
import CircleController from './CircleController';
import Header from './components/Header/Header';
import { StoreProvider, useStore } from './components/store/StoreProvider';
import Store from './components/store/store';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 170px 80px 104px;
  box-sizing: border-box;

  @media screen and (max-width: 1300px) {
    padding: 70px 4vw 60px;
  }

  @media screen and (max-width: 500px) {
    align-items: flex-start;
    padding: 59px 0;
  }
`;

const Numbers = styled.ul`
  display: flex;
  padding: 0;
  margin: 96px 0 137px;

  @media screen and (max-width: 1300px) {
    align-self: flex-end;
    margin: 6vw 0;
  }

  @media screen and (max-width: 500px) {
    align-self: flex-start;
    margin: 56px 0;
    padding: 0 20px;
  }
`;

const Number = styled.li`
  flex-shrink: 0;
  list-style-type: none;
  font-weight: bold;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: calc(1em / -50);

  &:not(:last-child) {
    margin-right: 100px;
  }

  @media screen and (max-width: 1300px) {
    font-size: 13vw;
    line-height: normal;

    &:not(:last-child) {
      margin-right: 5vw;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 56px;
    line-height: normal;

    &:not(:last-child) {
      margin-right: 28px;
    }
  }
`;

const IrisNumber = styled(Number)`
  color: var(--iris);

  @media screen and (max-width: 500px) {
    color: var(--blue);
  }
`;

const FuschiaNumber = styled(Number)`
  color: var(--fuschia);

  @media screen and (max-width: 500px) {
    color: var(--pink);
  }
`;

const HorLine = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    padding: 0 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 1px;
    box-sizing: border-box;

    & > hr {
      display: block;
      width: inherit;
      height: inherit;
      margin: 0;
      border: 0;
      background: #c7cdd9;
    }
  }
`;

const Block = observer(() => {
  const { blockStore } = useStore();

  useEffect(() => {
    blockStore.getContent();
  }, []);

  return (
    <Main>
      <Header>
        Исторические <br />
        даты
      </Header>
      {blockStore.content[0] && (
        <Numbers>
          <IrisNumber>{blockStore.content[0].from}</IrisNumber>
          <FuschiaNumber>{blockStore.content[0].to}</FuschiaNumber>
        </Numbers>
      )}
      <CircleController />
      <HorLine>
        <hr />
      </HorLine>
      {blockStore.content[0] && <Dates scope={blockStore.content[0]} />}
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
