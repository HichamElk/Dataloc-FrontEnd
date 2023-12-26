import React from 'react';
import blob_image from './../assets/blobs.svg';
import { Box, Image, Container, Center, Flex} from '@chakra-ui/react';

export default class Background extends React.Component {
    blob_style_desktop = {
        opacity: 1,
        zIndex: -1,
        position: 'absolute',
        minWidth: '80vh',
        maxWidth: '100vw',
        top: '0',
        left: '0',
    };

    grid = {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(218, 205, 220, 1)',
        backgroundImage: `
          radial-gradient(circle, rgba(218, 205, 220, 1) 10%, rgba(218, 205, 220, 0.7) 80%, rgba(218, 205, 220, 0) 100%),
          linear-gradient(to right, rgba(154, 120, 227, 0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(154, 120, 227, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: 'cover, 20px 20px, 20px 20px', 
        zIndex: -10,
    };

    render() {
        return (
            <Container maxW="100vw" m={0} p={0} position={"relative"} overflow="hidden"> 
                <Box style={this.grid} />
                <Box maxW="100%" w={"100%"}>
                    <Image src={blob_image} style={this.blob_style_desktop} />
                </Box>
                <Flex zIndex="1" minHeight="100vh" maxW="100%" m={0} p={0} flexWrap="wrap" position={"relative"} alignContent="space-between" alignItems="stretch" >
                    {this.props.children}
                </Flex>
            </Container>
        );
    }
}
