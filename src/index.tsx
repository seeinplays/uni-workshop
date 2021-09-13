import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
}

const NetworkContextName = "NETWORK";

const Web3RootProvider = createWeb3ReactRoot(NetworkContextName);

if (!!(window as any).ethereum) {
  (window as any).ethereum.autoRefreshOnNetworkChange = false;
}

ReactDOM.render(
  <ChakraProvider>
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
