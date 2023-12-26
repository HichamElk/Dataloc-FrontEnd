import React, { useState, useEffect } from 'react';
import { Box, Stack, Heading, Icon, Image, Text, Spacer, Flex } from '@chakra-ui/react';
import logo from './../assets/logo.png'
import { useMediaQuery } from "@chakra-ui/react"


export default function Footer() {
    const [isFooterVisible, setIsFooterVisible] = useState(true);
    const [isMobile] = useMediaQuery("(max-width: 768px)")

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if the content requires scrolling
        const isScrollNeeded = documentHeight > windowHeight;

        // Show the footer if the user scrolled to the bottom or if no scroll is needed
        if (currentScrollY + windowHeight >= documentHeight || !isScrollNeeded) {
            setIsFooterVisible(true);
        } else {
            setIsFooterVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on component mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <Box
            mt={10}
            h="10vw"
            maxH="15vh"
            minH="100px"
            w="100%"
            position="relative"
            bottom={0}
        >
            <Box
                h="100%"
                w="100%"
                bgColor="white"
                bottom={isFooterVisible ? "0" : "-50px"} // Adjust this value based on the height of your footer
                transform={isFooterVisible ? 'translateY(0)' : 'translateY(100%)'}
                style={{ transition: 'transform 0.5s ease-in-out' }}
            >
                <Stack direction="row" h="100%" pl={ isMobile ? 3 :10} pt={4}>
                    <Stack
                        direction="column"
                        alignContent="space-between"
                        alignItems="left"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        position={"absolute"}
                        gap={0}
                    >
                        <Image src={logo} borderRadius='full' boxSize={12} alt="logo" fit="contain" />
                        <Heading as="h1" size={ isMobile ? "xl" :"3xl"} >dataloc</Heading>
                    </Stack>
                    <Spacer />

                    <Flex
                        direction="column"
                        align="center"
                        w="60vw"
                        textAlign="center"
                        justifyContent="space-evenly"
                    >
                        <Flex
                            direction="row"
                            justify="space-evenly"
                            align="center"
                            w="100%"
                            textAlign="center"
                        >
                            <Heading as="h1" size="xs" flex="1">Mentions légales</Heading>
                            <Heading as="h1" size="xs" flex="1"></Heading>
                            <Heading as="h1" size="xs" flex="1">Support</Heading>
                        </Flex>
                        <Flex
                            direction="row"
                            justify="space-evenly"
                            align="center"
                            w="100%"
                            textAlign="center"
                        >
                            <Text fontSize='xs' flex="1">Termes et conditions d’utilisation</Text>
                            <Text fontSize='xs' flex="1">Cookies</Text>
                            <Text fontSize='xs' flex="1">Contactez-nous</Text>
                        </Flex>
                    </Flex>


                </Stack>
            </Box>
        </Box>
    );
}
