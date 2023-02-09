import React from 'react';
import NextLink from 'next/link';

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
          Highly motivated and detail-oriented Junior Web Developer with a passion for 
          delivering exceptional web solutions. Possessing 2 years of experience in 
          JavaScript, Node, and React, I am skilled in problem-solving and working 
          effectively in a team environment. I am always eager to take on new 
          challenges and utilize my technical skills to contribute to the 
          development of innovative web applications. With a strong focus on 
          user-centered design and a commitment to life-long learning, I strive to 
          stay at the forefront of the latest technologies and trends in the industry.
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
            as={ NextLink }
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