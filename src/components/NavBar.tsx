import { HStack, Image, Input, InputGroup, InputRightElement, Link, Show, Text } from '@chakra-ui/react'
import logo from '../assets/favicon.png';
import menu from '../assets/menu.png';
import { SearchIcon } from '@chakra-ui/icons';
import { primaryColor } from '../App';

const NavBar = () => {
    return (
        <HStack justifyContent='space-between' position='absolute' top='0' width='100%' zIndex='9' padding='15px 5%'>
            <Link display='flex' href='/' alignItems='center' gap='10px' _hover={{ textDecoration: 'none' }}>
                <Image src={logo} height={{base: '2.5rem', sm: '3.5rem'}} cursor='pointer' />
                <Text fontSize='24px' fontWeight='600' color='white' cursor='pointer'>MovieBox</Text>
            </Link>

            <Show above='lg'>
                <InputGroup justifyContent='center' maxWidth='40%'>
                    <Input
                        placeholder='What do you want to watch?'
                        _placeholder={{ color: 'white' }}
                        borderWidth='2px'
                        borderColor='white'
                        color='white'
                        focusBorderColor={primaryColor}
                    />
                    <InputRightElement>
                        <SearchIcon color='white' cursor='pointer' />
                    </InputRightElement>
                </InputGroup>
            </Show>

            <HStack>
                <Show above='md'>
                    <Text fontSize='24px' fontWeight='600' color='white'>Sign in</Text>
                </Show>
                
                <Image src={menu} height='2.3rem' cursor='pointer' />
            </HStack>
        </HStack>
    )
}

export default NavBar