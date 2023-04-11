import { FaWhatsapp } from 'react-icons/fa';
import { Box, Button, Flex, Image, Stack, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export const Home = () => {
  return (
    <Box>
        {/* frist image */}
        <Flex
        w="100%"
        h={{base:"300px",md:"500px",lg:"700px"}}
        backgroundImage={
          'url(https://user-images.githubusercontent.com/104376252/230051139-d93b51e1-9322-489b-b72b-4af7ad39c66a.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'center'} spacing={6}>
            <Text
            
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}>
             Dr.Vikash Rai
              
            </Text>
            <Box color={'white'}>
             <a href="#"><Image height={{base:"40px",md:"40px",lg:"60px"}} mt={{base:"-30px",md:"auto",lg:"auto"}} src="https://readme-typing-svg.herokuapp.com?color=FFF&center=true&lines=( D.P.T.,+B.P.T., + C.F.N.)" ></Image></a>
            </Box>

            <Button
              variant={'solid'}
              colorScheme={'green'}
              size={'lg'}
              mr={4}
              leftIcon={<FaWhatsapp/>}>
              <a  href="https://wa.me/+918081170443"> 8081170443</a>
            </Button>
           
          </Stack>
        </VStack>
      </Flex>
        {/* secoend */}



    </Box>
  )
}
