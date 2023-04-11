import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { EmailIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons';
import { GoLocation } from 'react-icons/go';




export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('black')}
      color={useColorModeValue('white')}>
      <Container as={Stack} maxW={'95%'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 2fr 1fr 1fr' }}
          spacing={8}>
             <Stack >
            <Box m="auto">
            <Image h={{base:"90%",md:"80%",lg:"100%"}} src='https://user-images.githubusercontent.com/104376252/230422983-7b450b17-f2d5-4187-9ffc-5f6810b5ecb4.png'/>
            </Box>
          </Stack>
          <Stack >
            <Text fontSize={{base:'22px',lg:"17px"}} pt={{base:"30px",lg:"auto"}} fontWeight="450" align="start">
            Vikash Physiotherapy has the power to transform lives by helping individuals regain physical independence and mobility. Through skilled techniques and personalized care, Vikash Physiotherapy empowers patients to overcome challenges and live their best lives.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
          <Heading fontSize="25px" color="yellow">Branches</Heading>
            <Button colorScheme={'black'}  leftIcon={<GoLocation />} href={'#'}>Near SBS Petrol Pump ,Bindra bajar,<br />Gambhirpur S.o, Uttar Pradesh</Button>
            <Button colorScheme={'black'}  leftIcon={<GoLocation />} href={'#'}>Lalganj Uttar Pradesh</Button>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading fontSize="25px" color="yellow">contact</Heading>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'lg'}
              mr={4}
              leftIcon={<FaWhatsapp/>}>
              <a  href="https://wa.me/+918081170443"> 8081170443</a>
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'lg'}
              mr={4}
              leftIcon={<PhoneIcon />}>
              <a href="tel:8081170443">80811-70443</a>
              {/* <a  href="https://wa.me/8081170443"> 8081170443</a> */}
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'lg'}
              mr={4}
              leftIcon={<EmailIcon/>}>
              <a href = "mailto:vrai85741@gmail.com">Send Email</a>
            </Button>
          </Stack>
          
        </SimpleGrid>
      </Container>
    </Box>
  );
}