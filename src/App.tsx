import { StoreProvider } from './store/StoreProvider';
import Store from './store/store';
import Block from './components/Block';

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
