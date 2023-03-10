import React from 'react';

import { Odinbook } from '../projects/Odinbook';
import { PhotoTag } from '../projects/PhotoTag';
import { MemoryGame } from '../projects/MemoryGame';

import {
  Flex,
  Box,
} from '@chakra-ui/react';

export const ProjectSection = () => {

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
        margin={{ base: '0 0 0 10px', md: '0 50px' }}
      >
        Featured Projects
      </Box>

      <Odinbook />
      <PhotoTag />
      <MemoryGame />
      
    </Flex>
  );
};