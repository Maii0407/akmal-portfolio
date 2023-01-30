import '@fontsource/big-shoulders-display';
import '@fontsource/big-shoulders-stencil-display';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { App } from './App';

const theme = extendTheme({
  layerStyles: {
    tool: {
      backgroundColor: 'gray.700',
      color: 'white',
      borderRadius: '20px',
      padding: '5px 10px'
    }
  },
  textStyles: {
    heading: {
      // fontFamily: '', //@fontsource/big-shoulders-stencil-display
      fontFamily: `"Big Shoulders Stencil Display", cursive`
    },
    bulletPoints: {
      fontSize: '30px',
      fontFamily: `"Big Shoulders Stencil Display", cursive`
    }
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
        color: 'white',
        fontFamily: `'Big Shoulders Display', curesive`,
      },
      'button, a': {
        _hover: {
          color: 'gray.900',
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={ theme } >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);