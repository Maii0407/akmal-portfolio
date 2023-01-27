import React from 'react';
import NextLink from 'next/link';

import {
  Flex,
  Box,
  Text,
  Icon,
  IconButton
} from '@chakra-ui/react';

import { SiGithub } from 'react-icons/si'

export const ContactMeSection = () => {

  return (
    <Flex
      direction='column'
      paddingBottom='50px'
    >
      <Box
        textStyle='bulletPoints'
        borderBottom='2px solid'
        borderColor='gray.500'
        padding='5px 10px'
        marginLeft='10px'
        marginBottom='50px'
      >
        Contact
      </Box>

      <Text
        color='gray.600'
        textAlign='center'
      >
        Write me an e-mail:
      </Text>
      <Box
        textStyle='bulletPoints'
        fontSize='25px'
        textAlign='center'
      >
        izuddin0407@gmail.com
      </Box>

      <Flex
        justifyContent='center'
        flexWrap='wrap'
        padding='25px'
      >
        <IconButton
          as={ NextLink }
          href='https://github.com/Maii0407'
          target='_blank'
          icon={ <Icon as={ SiGithub } boxSize='50px' /> }
          size='lg'
          backgroundColor='transparent'
        />
      </Flex>

    </Flex>
  );
};