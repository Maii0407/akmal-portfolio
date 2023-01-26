import React from 'react';

import {
  Flex,
  Box,
  Text,
  Button
} from '@chakra-ui/react';

export const AboutMeSection = () => {

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
      >
        About Me
      </Box>
      <Text
        padding='10px'
        color='gray.500'
      >
        Deeply invested in the life-long learning mentality, I am a full stack developer with 2 years of programming
        experience. My background in education has taught me the importance of user-first approach and attention to detail
        in design. My main focus is on creating responsive layouts using the JavaScript stack of React and NodeJS.
      </Text>
      <Box
        textStyle='bulletPoints'
        fontSize='25px'
        textAlign='center'
      >
        I am a
      </Box>

      <Box
        textStyle='bulletPoints'
        textAlign='center'
        fontSize='25px'
      >
        · Full Stack JavaScript Developer ·
      </Box>
      <Box
        textStyle='bulletPoints'
        textAlign='center'
        fontSize='25px'
      >
        · Frontend Developer ·
      </Box>
      <Box
        textStyle='bulletPoints'
        textAlign='center'
        fontSize='25px'
      >
        · A Pretty Great Guy ·
      </Box>

      <Button
        alignSelf='center'
        variant='solid'
        size='lg'
        color='gray.900'
        marginTop='40px'
      >
        Contact Me
      </Button>

    </Flex>
  );
};