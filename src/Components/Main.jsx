import { useForm, ValidationError } from '@formspree/react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
  Input,
  Heading,
  Flex,
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export default function Main() {
  const [state, handleSubmit] = useForm('mvonvrnj');

  if (state.succeeded) {
    return <Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
  >
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
    Appointment Booked!
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
      Thanks for Booking your Appointment. Our team will get back to you soon.
    </AlertDescription>
  </Alert>;
  }

  return (
    <Flex w={{base:"100%",lg:"100%"}}
    backgroundImage={
      'url(https://user-images.githubusercontent.com/104376252/230654300-c5fdc2e7-d986-46de-a210-d3898ecce664.png)'
    }>
    <Box
    border="3px solid black"
    bgColor="teal.100"
    borderRadius="10px"
    p="20px"
    pt="40px"
    mt="30px"
    mb="30px"
    pb="50px"
      as="form"
      onSubmit={handleSubmit}
      maxW={{base:"70%",md:"50%",lg:"30%"}}
      mx="auto"
    >
      <Heading>Book Appointment</Heading>
      <FormControl isInvalid={state.errors.name}>
        <FormLabel htmlFor="email">Name</FormLabel>
        <Input border="3px solid black" id="name" type="name" name="name" isRequired />
        <FormErrorMessage>
          <ValidationError
            prefix="name"
            field="name"
            errors={state.errors}
          />
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={state.errors.number}>
        <FormLabel htmlFor="Number">Number</FormLabel>
        <Input border="3px solid black" id="number" type="number" name="number" isRequired />
        <FormErrorMessage>
          <ValidationError
            prefix="Number"
            field="Number"
            errors={state.errors}
          />
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={state.errors.age}>
        <FormLabel htmlFor="Number">Age</FormLabel>
        <Input border="3px solid black" id="age" type="number" name="Age" isRequired />
        <FormErrorMessage>
          <ValidationError
            prefix="Age"
            field="Age"
            errors={state.errors}
          />
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={state.errors.message} mt={4}>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea border="3px solid black" id="message" name="message" />
        <FormErrorMessage>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </FormErrorMessage>
      </FormControl>
      <Button bgColor="yellow.100" type="submit" disabled={state.submitting} mt={4} w="100%">
        BOOK
      </Button>
    </Box>
    </Flex>
  );
}
