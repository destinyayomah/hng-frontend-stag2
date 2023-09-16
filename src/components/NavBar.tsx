import { HStack, Image, Link, Show, Text } from '@chakra-ui/react'
import logo from '../assets/favicon.png';
import menu from '../assets/menu.png';
import { SearchIcon } from '@chakra-ui/icons';
import { primaryColor, secondaryColor } from '../App';
import SearchField from './SearchField';

interface Props {
    onChange: (keyword: string) => void,
    toggleSearchVisiblity: () =>void
}

const NavBar = ({ onChange, toggleSearchVisiblity }: Props) => {
    return (
        <HStack justifyContent='space-between' position='absolute' top='0' width='100%' zIndex='9' padding='15px 5%'>
            <Link display='flex' href='/' alignItems='center' gap='10px' _hover={{ textDecoration: 'none' }}>
                <Image src={logo} height={{ base: '2.5rem', sm: '3.5rem' }} cursor='pointer' />
                <Text fontSize='24px' fontWeight='600' color='white' cursor='pointer'>MovieBox</Text>
            </Link>

            <Show above='lg'>
                <SearchField onChange={onChange} />
            </Show>

            <HStack>
                <Show below='991px'>
                    <HStack onClick={toggleSearchVisiblity} bg={primaryColor} width='2rem' height='2rem' justifyItems='center' alignItems='center' color='white' _hover={{ bg: secondaryColor, color: 'blackAlpha.500' }}>
                        <SearchIcon width='100%' />
                    </HStack>
                </Show>

                <Show above='md'>
                    <Text fontSize='24px' fontWeight='600' color='white'>Sign in</Text>
                </Show>

                <Image src={menu} height='2.3rem' cursor='pointer' />
            </HStack>
        </HStack>
    )
}

export default NavBar