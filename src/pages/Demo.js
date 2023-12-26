import React from 'react';
import { SearchBar } from '../component/Search_Bar';
import { Box, Stack, Text, Heading } from '@chakra-ui/react';

class Demo extends React.Component {
  state = {
    searchValue: '',
  }

  handleSearchChange = (value) => {
    this.setState({ searchValue: value });
  }

  suggestions = [
    "City 1",
    "City 2",
    "City 3"
  ]

  render() {
    return (
      <Stack spacing={3} direction="column" align="center" justify="center" w='100vw' h='100hv' pt={10}>
        <Heading as="h1" size="xl" >Search for a city</Heading>

        <SearchBar w='50%' my={10} onSearchChange={this.handleSearchChange} />

        <Stack w="50%" alignContent="left" display={ this.state.searchValue ? "" : "none"}>
          <Text w="100%" fontSize="xs" fontWeight="400" fontFamily="sans-serif" color="gray.500" >Suggestions</Text>
          <Stack w="100%" alignItems={"center"}>
            {
              this.suggestions.map((suggestion, index) => {
                return (
                  <Box
                    h={6} 
                    p={1}
                    w="80%"
                    mt={2}
                    bgColor={"#D4D4D4"}
                    opacity={0.4}
                    borderRadius={25}
                    key={index}
                    _hover={{ 
                      opacity: 0.9
                     }}
                  >
                    <Text px={3} fontSize="xs" color="#06020D" >{suggestion}</Text>
                  </Box>
                )
              })
            }
          </Stack>
        </Stack>
        <Text fontSize="xs" fontFamily="monospace" color="gray.500" px="20%" display={ this.state.searchValue ? "none" : ""}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
          sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
          imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
          at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam
          condimentum, vel euismod erat placerat.
        </Text>
      </Stack>
    );
  }
}

export default Demo;

