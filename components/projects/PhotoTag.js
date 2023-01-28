import React from 'react';

import NextLink from 'next/link';

import {
  Box,
  Flex,
  Image,
  Icon,
  Text,
  Button
} from '@chakra-ui/react';

import {
  SiReact,
  SiFirebase,
} from 'react-icons/si';

export const PhotoTag = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row-reverse' }}
      padding={{ base: '0', md: '50px 20px' }}
      gap={{ md: '20px' }}
    >

      <Image
        display={{ md: 'none' }}
        src={ '/photo-tagging-vertical.png' }
        alt='odinbook-01'
        width='100%'
        borderRadius='10px'
        margin='20px 0'
      />
      <Image
        display={{ base: 'none', md: 'block' }}
        src={ '/photo-tag.gif' }
        alt='odinbook-01'
        borderRadius='10px'
      />

      <Flex
        direction='column'
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'center' }}
      >

        <Box
          textStyle='bulletPoints'
          textAlign='center'
          fontSize='25px'
        >
          Photo Tag
        </Box>

        <Flex
          justifyContent='center'
          flexWrap='wrap'
          gap='10px'
        >

          <Flex
            layerStyle='tool'
            direction='row'
            alignItems='center'
            gap='5px'
          >
            <Icon as={ SiReact } />
            <Text>
              react
            </Text>
          </Flex>

          <Flex
            layerStyle='tool'
            direction='row'
            alignItems='center'
            gap='5px'
          >
            <Icon as={ SiFirebase } />
            <Text>
              firebase
            </Text>
          </Flex>

        </Flex>

        <Text
          padding='10px'
          color='gray.500'
        >
          { `A "Where's Waldo" web app, but instead of finding Waldo, 
          users find Pokemon. The app was built using React and Firebase. The location of the Pokemon is 
          stored in Firebase, and tagged to the images. The app utilizes Firebase as a real-time 
          database and storage service, allowing users to quickly and easily locate and identify the 
          Pokemon in the pictures. The use of React allows for a seamless and interactive user 
          experience, allowing users to easily navigate through the images and find the Pokemon 
          they are looking for. This project showcases your skills in using popular web development 
          technologies to create a fun and engaging application that can be enjoyed by users of all 
          ages.` }
        </Text>

        <Flex
          direction='row'
          justifyContent='center'
          gap='20px'
          margin='20px 0'
        >
          <Button
            as={ NextLink }
            href='https://github.com/Maii0407/photo-tagging-app'
            target='_blank'
            variant='outline'
          >
            View Code
          </Button>
          <Button
            as={ NextLink }
            href='https://maii0407.github.io/photo-tagging-app/'
            target='_blank'
            variant='outline'
          >
            Live Preview
          </Button>
        </Flex>

      </Flex>

    </Flex>
  )
}