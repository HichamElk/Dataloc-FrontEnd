import React from 'react';
import logo from './../assets/logo.png'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'

import { Box, IconButton, Heading, Image, Spacer, Stack, Button, Input } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

const routes = [
  { path: '/demo', label: 'Product' },
  { path: '/how-it-works', label: 'How it works', },
  { path: '/about-us', label: 'About us' },
];

export default function Header() {
  //state for mobile screen
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  if (!isMobile) {

    return (
      <Box>
        <Stack direction="row" spacing={5} align="center" justify="center" w='100vw' pt={1} pb={5} px={3}>
          <ChakraLink as={ReactRouterLink} to={"/"} >
            <Image src={logo} borderRadius='full' boxSize={16} alt="logo" fit="contain" />
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to={"/"} >
            <Heading as="h1">dataloc.ai</Heading>
          </ChakraLink>
          <Spacer />
          {routes.map((route, index) => (
            <ChakraLink as={ReactRouterLink} to={route.path} key={index} >
              <Heading size="md" variant="header" noOfLines={route.label === 'How it works' ? 2 : 1}>
                {route.label}
              </Heading>
            </ChakraLink>
          ))}
        </Stack>
      </Box>
    )
  }

  return (
    <Box>
      <Stack direction="row" spacing={5} align="center" justify="left" w='100vw' pt={1} px={3}>
        <IconButton
          ref={btnRef}
          variant="ghost"
          colorScheme="blackAlpha"
          onClick={onOpen}
          icon={<HamburgerIcon />}
          size="lg"
          aria-label="Open menu"
          rounded="full"
        >
          Open
        </IconButton>

      </Stack>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <ChakraLink as={ReactRouterLink} to={"/"} >
              <Image src={logo} borderRadius='full' boxSize={16} alt="logo" />
            </ChakraLink>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing={5} h="100%">

              {routes.map((route, index) => (
                <ChakraLink as={ReactRouterLink} to={route.path} key={index} >
                  <Heading size="lg" variant="header" noOfLines={route.label === 'How it works' ? 2 : 1}>
                    {route.label}
                  </Heading>
                </ChakraLink>
              ))}
              <Spacer />
              <Input placeholder="Email" size="sm" />
              <Input placeholder="Email" size="sm" />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="gray" onClick={onClose}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
