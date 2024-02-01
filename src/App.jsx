import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import AppNavigation from './navigation/AppNavigation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppNavigation />
    </ChakraProvider>
  );
}

export default App;
