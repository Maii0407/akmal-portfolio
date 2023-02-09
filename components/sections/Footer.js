import React from 'react';

import {
  Box,
  Flex,
  Text
} from '@chakra-ui/react';


export const FooterSection = () => {

  return (
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
      borderTop='2px solid'
      borderColor='gray.500'
      paddingTop='50px'
      gap='20px'
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        gap='30px'
      >

        <Text
          color='gray.500'
        >
          Akmal Izuddin · 2023
        </Text>
  
        <Box
          textStyle='heading'
          fontSize='30px'
          border='2px solid white'
          borderRadius='10px'
          padding='10px'
        >
          maii
        </Box>
  
        <Text
          color='gray.500'
          marginBottom={{ base: '30px', md: '0' }}
        >
          All Right Reserved.
        </Text>

      </Flex>

      <Text
        color='gray.500'
      >
        Design by Pedro Klepa
      </Text>

    </Flex>
  );
};