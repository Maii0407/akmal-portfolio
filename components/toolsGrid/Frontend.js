import React from 'react';

import {
  Box,
  Flex,
  Grid,
  Icon,
  Text
} from '@chakra-ui/react';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPug,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiChakraui
} from 'react-icons/si';

export const FrontendTools = () => {
  return (
    <Flex
      direction='column'
      marginTop='30px'
    >
      <Box
        textStyle='bulletPoints'
        textAlign='center'
        fontSize='25px'
      >
        Frontend Tools
      </Box>
      <Grid
        gridTemplateColumns='repeat(3, 1fr)'
      >
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiHtml5 }
            boxSize='50px'
          />
          <Text>
            html5
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiCss3 }
            boxSize='50px'
          />
          <Text>
            css3
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiJavascript }
            boxSize='50px'
          />
          <Text>
            javascript
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiPug }
            boxSize='50px'
          />
          <Text>
            pug
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiReact }
            boxSize='50px'
          />
          <Text>
            react
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiRedux }
            boxSize='50px'
          />
          <Text>
            redux
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiNextdotjs }
            boxSize='50px'
          />
          <Text>
            next.js
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiChakraui }
            boxSize='50px'
          />
          <Text>
            chakra ui
          </Text>
        </Flex>
      </Grid>
    </Flex>
  )
}