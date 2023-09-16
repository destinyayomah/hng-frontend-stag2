import { Button, HStack, Image, Show, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../assets/favicon.png';
import home from '../assets/home.png';
import movieProjector from '../assets/movie-projector.png';
import tvShow from '../assets/tv-show.png';
import calendar from '../assets/calendar.png';
import logout from '../assets/logout.png';
import { primaryColor, secondaryColor } from '../App';

const SideBar = () => {
    const rect = {
        content: "''",
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '5px',
        backgroundColor: primaryColor,
        height: '100%',
        transition: 'height 0.3s ease'
    };
    
    return <>
        <Show above="md">
            <VStack minHeight='100vh' flex='1' minWidth='60px' maxWidth='250px' border='1px solid #D9D9D9' borderRadius='0 50px 50px 0' paddingBottom='50px'>
                <Link to='/'>
                    <HStack padding='50px 0'>
                        <Image src={logo} height={{ base: '2.5rem', sm: '3.5rem' }} cursor='pointer' />
                        <Show above="lg">
                            <Text fontSize='24px' fontWeight='600' cursor='pointer'>MovieBox</Text>
                        </Show>
                    </HStack>
                </Link>

                <HStack position='relative' width='100%'>
                    <HStack cursor='pointer' width='100%' justifyContent='center' paddingY='40px' _hover={{ bg: secondaryColor }}>
                        <Image src={home} />
                        <Show above="lg">
                            <Text fontSize='20px' fontWeight='600'>Home</Text>
                        </Show>
                    </HStack>
                </HStack>

                <HStack position='relative' width='100%'>
                    <HStack cursor='pointer' width='100%' justifyContent='center' paddingY='40px' _after={rect} bg={secondaryColor}>
                        <Image src={movieProjector} />
                        <Show above="lg">
                            <Text fontSize='20px' fontWeight='600'>Movies</Text>
                        </Show>
                    </HStack>
                </HStack>

                <HStack position='relative' width='100%'>
                    <HStack cursor='pointer' width='100%' justifyContent='center' paddingY='40px' _hover={{ bg: secondaryColor }}>
                        <Image src={tvShow} />
                        <Show above="lg">
                            <Text fontSize='20px' fontWeight='600'>TV Series</Text>
                        </Show>
                    </HStack>
                </HStack>

                <HStack position='relative' width='100%'>
                    <HStack cursor='pointer' width='100%' justifyContent='center' paddingY='40px' _hover={{ bg: secondaryColor }}>
                        <Image src={calendar} />
                        <Show above="lg">
                            <Text fontSize='20px' fontWeight='600'>Upcoming</Text>
                        </Show>
                    </HStack>
                </HStack>

                <Show above="lg">
                    <VStack width='70%' borderRadius='30px' borderColor={primaryColor} borderWidth='2px' padding='50px 20px' bg={secondaryColor}>
                        <Text fontSize='15px' fontWeight='600'>Play movie quizes and earn free tickets</Text>
                        <Text fontSize='12px'>50k people are playing now</Text>
                        <Button colorScheme="red" variant='ghost' fontSize='12px' borderRadius='30px' bg='#F0C8D2' marginTop='10px'>Start Playing</Button>
                    </VStack>
                </Show>

                <HStack position='relative' width='100%'>
                    <HStack cursor='pointer' width='100%' justifyContent='center' paddingY='40px' _hover={{ bg: secondaryColor }}>
                        <Image src={logout} />
                        <Show above="lg">
                            <Text fontSize='20px' fontWeight='600'>Logout</Text>
                        </Show>
                    </HStack>
                </HStack>
            </VStack>
        </Show>
    </>
}

export default SideBar