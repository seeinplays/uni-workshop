import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider, 'any');
  library.pollingInterval = 15000;
  return library;
}

const NetworkContextName = 'NETWORK';

const Web3RootProvider = createWeb3ReactRoot(NetworkContextName);

if (!!(window as any).ethereum) {
  (window as any).ethereum.autoRefreshOnNetworkChange = false;
}

// Chakra UI theme.
const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('gray.100', '#1C2751')(props),
    },
  }),
};

const theme = extendTheme({
  styles,
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3RootProvider getLibrary={getLibrary}>
          <App />
        </Web3RootProvider>
      </Web3ReactProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
