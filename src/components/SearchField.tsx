import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { primaryColor } from '../App'
import { SearchIcon } from '@chakra-ui/icons'

interface Props {
    onChange: (keyword: string) => void
}

const SearchField = ({ onChange }: Props) => {
    return <>
        <InputGroup justifyContent='center' maxWidth={{ base: '100%', lg: '40%' }}>
            <Input
                placeholder='What do you want to watch?'
                _placeholder={{ color: 'white' }}
                borderWidth='2px'
                borderColor='white'
                color='white'
                focusBorderColor={primaryColor}
                onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
            />
            <InputRightElement>
                <SearchIcon color='white' cursor='pointer' />
            </InputRightElement>
        </InputGroup>
    </>
}

export default SearchField