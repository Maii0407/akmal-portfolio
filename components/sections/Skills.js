import React from 'react';

import { FrontendTools } from '../toolsGrid/Frontend';
import { BackendTools } from '../toolsGrid/Backend';
import { MiscTools } from '../toolsGrid/Misc';

import {
  Flex,
  Box,
} from '@chakra-ui/react';

export const SkillsSection = () => {

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
        Tools & Skills
      </Box>

      <FrontendTools />
      <BackendTools />
      <MiscTools />
      
    </Flex>
  );
};