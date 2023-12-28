import React, { useEffect, useRef } from 'react';
import { Box, Heading, Stack, Image, Text, Button, Input, Spacer } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import CustomButton from '../component/CustomButton';
import House from '../assets/House.svg';

function Landing() {
  const toast = useToast()
  // Check if email is valid 
  const emailRef = useRef();
  const emailRegex = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');

  const handleSubscribe = () => {
    const email = emailRef.current.value;
    if (emailRegex.test(email)) {
      const data = JSON.stringify({ email });
      console.log(data);
      fetch('http://127.0.0.1:5000/newsletter', {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: data,
      })
        .then(async response => {
          const data = await response.json();
          // Check for error response
          if (!response.ok) {
            // Get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          else {
            toast({
              title: 'Subscription successful ❤️',
              description: "We've sent you an email to confirm your subscription to our newsletter !",
              status: 'success',
              duration: 7000,
              isClosable: true,
            })
            
          }
          console.log(data);
        
        })
        .catch(error => {
          toast({
            title: 'Oh no 😢',
            description: "An error occured, feel free to contact us at contact@dataloc.io or on our social media !",
            status: 'error',
            duration: 7000,
            isClosable: true,
          })
          console.error(error);
        });
    } else {
      toast({
        title: 'Invalid email',
        description: "Please enter a valid email address !",
        status: 'error',
        duration: 7000,
        isClosable: true,
      })
    }
  };
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
        <Input placeholder="Email" size="sm" ref={emailRef} />
        <Button as="h1" size="sm" onClick={handleSubscribe}>Subscribe</Button>


      </Stack>
    </Stack>
  );
}

export default Landing;