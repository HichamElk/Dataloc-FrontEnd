import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Loading from './pages/Loading';
import DisplayData from './pages/DisplayData';
import Demo from './pages/Demo';
import Background from './component/Background'
import Header from './component/Header'
import Footer from './component/Footer'

import { Box, Center, ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components : {
    Heading: {
      variants: {
        'header': {
          fontWeight: '400',
        },
      },
    },    
  }
})

class App extends React.Component {
  render() {
    return (
      <ChakraProvider theme={theme}>
        <Background>
          <Header />
          <Routes >
            <Route path='/' exact element={<Landing />} />
            <Route path='/demo' exact element={<Demo />} />
            <Route path='/loading' element={<Loading />} />
            <Route path='/display-data' element={<DisplayData />} />
          </Routes>
          <Footer/>
        </Background>
      </ChakraProvider>
    );
  }
}

export default App;