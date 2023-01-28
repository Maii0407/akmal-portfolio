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
} from 'react-icons/si';

export const MemoryGame = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      padding={{ base: '0', md: '50px 20px' }}
      gap={{ md: '20px' }}
    >

      <Image
        display={{ md: 'none' }}
        src={ '/memory-game-vertical.png' }
        alt='odinbook-01'
        width='100%'
        borderRadius='10px'
        margin='20px 0'
      />
      <Image
        display={{ base: 'none', md: 'block' }}
        src={ '/memory-game.gif' }
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
          Memory Card Game
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

        </Flex>

        <Text
          padding='10px'
          color='gray.500'
        >
          A memory card game web application built using React, a popular JavaScript library 
          for building user interfaces. The app allows users to play a game of memory card, where they 
          flip over pairs of cards in an effort to match them. The game is implemented with React,
          which allows for a seamless and interactive user experience. The app is designed to be 
          user-friendly and easy to navigate. The app is deployed on Github Pages, which is a 
          platform to host web pages directly from a Github repository.
        </Text>

        <Flex
          direction='row'
          justifyContent='center'
          gap='20px'
          margin='20px 0'
        >
          <Button
            as={ NextLink }
            href='https://github.com/Maii0407/memory-card-react'
            target='_blank'
            variant='outline'
          >
            View Code
          </Button>
          <Button
            as={ NextLink }
            href='https://maii0407.github.io/memory-card-react/'
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