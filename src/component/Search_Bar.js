import React from 'react';
import {  Input, InputGroup, InputLeftElement , InputRightElement} from '@chakra-ui/react'
import { Button, Box} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export const SearchBar = (props) => {
    const [value, setValue] = React.useState('')
    const handleChange = (event) => {
        setValue(event.target.value);
        props.onSearchChange(event.target.value); // Pass the value to the parent component
    }
    return (
        <InputGroup {...props}>
            <InputLeftElement pointerEvents='none'>
                {
                    value ? <Box
                    as='button'
                    height='16px'
                    lineHeight='1.2'
                    border='1px'
                    px='2px'
                    borderRadius='2px'
                    fontSize='8px'
                    fontWeight='semibold'
                    bg='#f5f6f7'
                    opacity='0.7'
                    mx={3}
                    borderColor='#ccd0d5'
                    color='#4b4f56'
                  >
                    ENTER
                  </Box> : <Search2Icon mx={3} color="#06020D" opacity={0.62} />
    
                }
            </InputLeftElement>
    
            <Input 
                type='text' 
                color="#06020D"
                variant={'filled'}
                opacity={0.62}
                placeholder='Search city...' 
                value={value}
                onChange={handleChange}
            />
            
        </InputGroup>
      );

};