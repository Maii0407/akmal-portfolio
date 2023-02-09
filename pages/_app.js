import '@fontsource/big-shoulders-display';
import '@fontsource/big-shoulders-stencil-display';

import Head from 'next/head';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

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

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Akmal Izuddin</title>
        <link rel="maii icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={ theme } >
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
