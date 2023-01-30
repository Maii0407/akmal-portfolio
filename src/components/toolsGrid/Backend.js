import React from 'react';

import {
  Box,
  Flex,
  Icon,
  Text
} from '@chakra-ui/react';

import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPassport,
  SiFirebase,
  SiRailway,
} from 'react-icons/si';

export const BackendTools = () => {
  return (
    <Flex
      direction='column'
      marginTop='30px'
    >
      <Box
        textStyle='bulletPoints'
        textAlign={{ base: 'center', md: 'left' }}
        textIndent={{ md: '50px' }}
        fontSize='25px'
      >
        Backend Tools
      </Box>

      <Box
        display={{ base: 'grid', md: 'flex' }}
        gridTemplateColumns={{ base: 'repeat(3, 1fr)', md: 'none' }}
        gap={{ md: '30px' }}
        margin={{ base: '0', md: '0 50px' }}
      >
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiNodedotjs }
            boxSize='50px'
          />
          <Text>
            node.js
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiExpress }
            boxSize='50px'
          />
          <Text>
            express
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiMongodb }
            boxSize='50px'
          />
          <Text>
            mongodb
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiPassport }
            boxSize='50px'
          />
          <Text>
            passportjs
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiFirebase }
            boxSize='50px'
          />
          <Text>
            firebase
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiRailway }
            boxSize='50px'
          />
          <Text>
            railway.app
          </Text>
        </Flex>
      </Box>

    </Flex>
  )
}