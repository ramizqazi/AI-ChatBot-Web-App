import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';

import AppNavigation from './navigation/AppNavigation';
import configureStore from './redux/configureStore';

const { persistor, store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <AppNavigation />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
