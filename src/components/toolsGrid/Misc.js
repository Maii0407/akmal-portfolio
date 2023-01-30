import React from 'react';

import {
  Box,
  Flex,
  Grid,
  Icon,
  Text
} from '@chakra-ui/react';

import {
  SiGit,
  SiGithub,
  SiLinux,
} from 'react-icons/si';

import { IoLogoNpm } from 'react-icons/io';

export const MiscTools = () => {
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
        Miscellaneous
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
            as={ SiGit }
            boxSize='50px'
          />
          <Text>
            git
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiGithub }
            boxSize='50px'
          />
          <Text>
            github
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ IoLogoNpm }
            boxSize='50px'
          />
          <Text>
            npm
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          padding='10px'
        >
          <Icon
            as={ SiLinux }
            boxSize='50px'
          />
          <Text>
            linux
          </Text>
        </Flex>
      </Box>
      
    </Flex>
  )
}