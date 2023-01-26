import '@fontsource/big-shoulders-stencil-display';
import '@fontsource/big-shoulders-display';

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
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
      }
    }
  }
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={ theme } >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
