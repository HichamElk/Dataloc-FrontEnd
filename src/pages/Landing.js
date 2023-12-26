import React, { useEffect, useRef } from 'react';
import { Box, Heading, Stack, Image, Text, Button, Input, Spacer } from '@chakra-ui/react';
import * as THREE from 'three';
import CustomButton from '../component/CustomButton';
import House from '../assets/House.svg';

function Landing() {
  return (
    <Stack direction={["column", "column", "row"]} spacing={12} px={"5vw"}  w='100%' h="80%" align='stretch'>
      <Stack direction="column" spacing={8}>
        <Heading as="h1" size="lg" >Site under construction 🏗️ <br /> Subscribe to the newsletter!</Heading>
        <Text size="sm">
          Dataloc AI is a platform that allows you to find the best place to live in a city.
          We use data from different sources to provide you with the best information.
          You can find the source code of the project on our GitHub.
          <br />
          The project is currently under construction, feel free to add your email to the newsletter to be notified when the project is ready !
        </Text>
        <Spacer /> 
      </Stack>
      <Stack direction="column" spacing={4} >
        <Image
          /* Change max width depending if screen is mobile sized or not */
          maxW={["100%", "100%", "40vw"]}
          h='auto' src={House} alt="House"
        />
        <Input placeholder="Email" size="sm" />
        <Button as="h1" size="sm">Subscribe</Button>


      </Stack>
    </Stack>
  );
}

export default Landing;