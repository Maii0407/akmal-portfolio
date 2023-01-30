import React from 'react';

import {
  Box,
  Flex,
  Text
} from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';

export const LogoSection = () => {
  return (
    <Flex
      direction='column'
      height='100vh'
      alignItems='center'
      justifyContent='space-around'
    >
      <Box
        textStyle='heading'
        fontSize='50px'
        border='2px solid white'
        borderRadius='10px'
        padding='10px'
      >
        akmal izuddin
      </Box>

      <Flex
        direction='column'
        alignItems='center'
      >
        <Text>
          Scroll Down
        </Text>
        <TriangleDownIcon />
      </Flex>
      
    </Flex>
  );
};