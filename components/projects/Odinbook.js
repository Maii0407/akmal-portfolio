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
  SiNextdotjs,
  SiChakraui,
  SiMongodb,
  SiRailway,
  SiReact
} from 'react-icons/si';

export const Odinbook = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      padding={{ base: '0', md: '50px 20px' }}
      gap={{ md: '20px' }}
    >
      <Image
        display={{ md: 'none' }}
        src='/odinbook-01.png'
        alt='odinbook-01'
        width='100%'
        border='2px solid'
        borderColor='gray.600'
        borderRadius='10px'
        margin='20px 0'
      />
      <Image
        display={{ base: 'none', md: 'block' }}
        src='/helloTHERE.gif'
        alt='odinbook-01'
        border='2px solid'
        borderColor='gray.600'
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
          hiTHERE
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
            <Icon as={ SiNextdotjs } />
            <Text>
              next.js
            </Text>
          </Flex>
  
          <Flex
            layerStyle='tool'
            direction='row'
            alignItems='center'
            gap='5px'
          >
            <Icon as={ SiChakraui } />
            <Text>
              chakra ui
            </Text>
          </Flex>
  
          <Flex
            layerStyle='tool'
            direction='row'
            alignItems='center'
            gap='5px'
          >
            <Icon as={ SiMongodb } />
            <Text>
              mongodb
            </Text>
          </Flex>
  
          <Flex
            layerStyle='tool'
            direction='row'
            alignItems='center'
            gap='5px'
          >
            <Icon as={ SiRailway } />
            <Text>
              railway.app
            </Text>
          </Flex>

          <Flex
            layerStyle='tool'
            direction='row'
            alignItems='center'
            gap='5px'
          >
            <Icon as={ SiReact } />
            <Text>
              reactjs
            </Text>
          </Flex>
  
        </Flex>
  
        <Text
          padding='10px'
          color='gray.500'
        >
          A Facebook clone app built using Next.js, Next Auth, and MongoDB. This project was an opportunity to showcase 
          my skills in web development and demonstrate my ability to create a 
          functional clone of a popular social media platform. I utilized Next.js as the framework for building 
          server-rendered React applications, Next Auth for handling authentication and authorization, and MongoDB as the 
          database to store user data. The app was deployed on railway.app, and it is a fully functional social media 
          platform that allows users to connect with friends, share updates and photos, and engage in conversations. 
          This project was a challenging and rewarding experience, and I am proud to include it in my portfolio.
        </Text>
  
        <Flex
          direction='row'
          justifyContent='center'
          gap='20px'
          margin='20px 0'
        >
          <Button
            as={ NextLink }
            href='https://github.com/Maii0407/hi-there'
            target='_blank'
            variant='outline'
          >
            View Code
          </Button>
          <Button
            as={ NextLink }
            href='https://hi-there-production.up.railway.app'
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

