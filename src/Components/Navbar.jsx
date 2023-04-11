import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, PhoneIcon } from '@chakra-ui/icons';


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as="header" w="100%" bg={useColorModeValue("#071930")} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image w={{base:"200px",md:"180px",lg:"220px"}} src="https://user-images.githubusercontent.com/104376252/230029865-6df4604b-a233-4cf1-a04c-4ab5c5501442.png" alt="" /></Box>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<PhoneIcon />}>
              <a href="tel:8081270443">80812-70443</a>
            </Button>
            
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://user-images.githubusercontent.com/104376252/230052316-966106f2-c999-4e5d-b9d8-19ad02aaad87.png'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              team
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}