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
        margin={{ base: '0 0 0 10px', md: '0 50px' }}
      >
        About Me
      </Box>

      <Box
        display={{ base: 'flex', md: 'grid' }}
        flexDirection={{ base: 'column' }}
        gridTemplateColumns={{ base: 'none', md: 'repeat( 2, 1fr )' }}
      >

        <Text
          padding={{ base: '10px', md: '50px' }}
          color='gray.500'
        >
          Deeply invested in the life-long learning mentality, I am a full stack developer with 2 years of programming
          experience. My background in education has taught me the importance of user-first approach and attention to detail
          in design. My main focus is on creating responsive layouts using the JavaScript stack of React and NodeJS.
        </Text>

        <Flex
          direction='column'
          padding={{ base: '10px', md: '50px' }}
        >
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
            as='a'
            href='#contact'
            alignSelf='center'
            variant='solid'
            size='lg'
            color='gray.900'
            marginTop='40px'
          >
            Hello
          </Button>
        </Flex>

      </Box>

    </Flex>
  );
};