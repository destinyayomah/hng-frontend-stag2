import { Badge, Button, HStack, Icon, Image, MenuIcon, MenuList, Select, Show, Stack, Text, VStack, Wrap } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom"
import logo from '../assets/favicon.png';
import home from '../assets/home.png';
import movieProjector from '../assets/movie-projector.png';
import tvShow from '../assets/tv-show.png';
import calendar from '../assets/calendar.png';
import logout from '../assets/logout.png';
import star from '../assets/star.png';
import twoTickets from '../assets/two-tickets.png';
import list from '../assets/list.png';
import listWhite from '../assets/list-white.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { primaryColor, secondaryColor } from "../App";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Movies = () => {
    const { id } = useParams();
    const [hoveredPlayIcon, setHoveredPlayIcon] = useState(false);

    function handleHoveredIn() {
        setHoveredPlayIcon(true);
    }

    function handleHoveredOut() {
        setHoveredPlayIcon(false);
    }

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

    function toggleMenu() {
        console.log('toggleMenu');
    }

    return <>
        <Show below="767px">
            <HStack justify='space-between' padding='0 30px' alignItems='center'>
                <HamburgerIcon fontSize='30px' onClick={toggleMenu} />
                <HStack padding='10px 30px 0 30px'>
                    <Image src={logo} height={{ base: '2.5rem' }} cursor='pointer' />
                    <Text fontSize='24px' fontWeight='600' cursor='pointer'>MovieBox</Text>
                </HStack>
                <div></div>
            </HStack>
        </Show>

        <HStack justifyContent='space-between' alignItems='start'>
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

            <VStack flex='4' padding='30px'>
                <Stack position='relative' width='100%' height={{ base: '200px', md: '300px', lg: '450px' }}>
                    <Image src="https://www.themoviedb.org/t/p/original/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg" height='100%' fit='cover' borderRadius='20px' />
                    <Stack position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' color='white' alignItems='center'>
                        <Stack padding='10px' borderRadius='50%' bg='rgba(217, 217, 217, 0.7)' width='80px' height='80px' justifyContent='center' alignItems='center' textAlign='center'>
                            <FontAwesomeIcon icon={faPlay} fontSize="50px" cursor='pointer' color={hoveredPlayIcon ? primaryColor : 'white'} onMouseEnter={handleHoveredIn} onMouseLeave={handleHoveredOut} />
                        </Stack>
                        <Text fontSize='22px'>Watch Trailer</Text>
                    </Stack>
                </Stack>

                <Stack width='100%' direction={{base: 'column', lg: 'row'}} justifyContent='space-between'>
                    <Stack direction={{ base: 'column', md: 'row' }} alignItems='start' margin='10px 0' fontSize={{ base: '18px', lg: '20px' }}>
                        <Text fontWeight='600'>Top Gun: Mavrick • 2022 • PG-13 • 2h 10m </Text>
                        <Wrap>
                            <Badge color={primaryColor} textTransform='capitalize' border='1px solid #F8E7EB' bg='white' borderRadius='30px' padding='2px 10px' cursor='pointer'>Action</Badge>
                            <Badge color={primaryColor} textTransform='capitalize' border='1px solid #F8E7EB' bg='white' borderRadius='30px' padding='2px 10px' cursor='pointer'>Drama</Badge>
                        </Wrap>
                    </Stack>

                    <HStack margin='10px 0' fontSize={{base: '12px'}}>
                        <Image src={star} width='24px' height='24px' />
                        <Text color='blackAlpha.400'>8.5</Text>
                        <Text>|</Text>
                        <Text>350k</Text>
                    </HStack>
                </Stack>

                <Stack alignItems='start' direction={{ base: 'column', lg: 'row' }}>
                    <VStack flex='3' fontSize={{base: '14px'}} width='100%'>
                        <Text>After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.</Text>

                        <HStack width='100%' margin='20px 0 10px 0' alignItems='start'>
                            <Text>Director:</Text>
                            <Text color={primaryColor}>Joseph Kosinski</Text>
                        </HStack>

                        <HStack width='100%' margin='10px 0' alignItems='start'>
                            <Text>Writes:</Text>
                            <Text color={primaryColor}>Jim Cash, Jack Epps Jr, Peter Craig</Text>
                        </HStack>

                        <HStack width='100%' margin='10px 0' alignItems='start'>
                            <Text>Stars:</Text>
                            <Text color={primaryColor}>Tom Cruise, Jennifer Connelly, Miles Teller</Text>
                        </HStack>

                        <Stack direction={{base: 'column', sm: 'row'}} width='100%' marginTop='30px' spacing='0' border='1px solid #C7C7C7' borderRadius='10px'>
                            <Wrap whiteSpace='nowrap' bg={primaryColor} color='white' borderRadius='10px' padding='10px 20px'>Top rated movie #65</Wrap>
                            <Select _focus={{ borderColor: primaryColor, boxShadow: 'none' }} border='none' placeholder="Awards 9 nominations"></Select>
                        </Stack>
                    </VStack>

                    <VStack flex='1' width='100%'>
                        <Button marginTop='10px' width='100%' color="white" colorScheme='blackAlpha' bg={primaryColor} leftIcon={<Image src={twoTickets} />}>See Showtimes</Button>

                        <Button width='100%' color="black" colorScheme="red" bg={secondaryColor} border='1px' borderColor={primaryColor} leftIcon={<Image src={list} />}>More Wacth Options</Button>

                        <Stack position='relative' width='100%' marginTop='10px' height='200px'>
                            <HStack justifyContent='space-between' spacing='2px'>
                                <HStack height='200px' width='100%'>
                                    <Image src="https://www.themoviedb.org/t/p/w220_and_h330_face/6oH378KUfCEitzJkm07r97L0RsZ.jpg" borderRadius='10px 0 0 10px' height='100%' fit='cover' width='100%' />
                                </HStack>

                                <HStack height='200px' width='100%'>
                                    <Image src="https://www.themoviedb.org/t/p/w220_and_h330_face/1Xgjl22MkAZQUavvOeBqRehrvqO.jpg" height='100%' fit='cover' width='100%' />
                                </HStack>

                                <HStack height='200px' width='100%'>
                                    <Image src="https://www.themoviedb.org/t/p/w220_and_h330_face/laCJxobHoPVaLQTKxc14Y2zV64J.jpg" borderRadius='0 10px 10px 0' height='100%' fit='cover' width='100%' />
                                </HStack>
                            </HStack>

                            <HStack position='absolute' bg='blackAlpha.700' bottom='0' left='0' right='0' borderRadius='0 0 10px 10px'>
                                <Image src={listWhite} />
                                <Text color='whiteAlpha.800' fontSize='11px' >The Best Moveis and Shows in September</Text>
                            </HStack>
                        </Stack>
                    </VStack>
                </Stack>
            </VStack>
        </HStack>
    </>
}

export default Movies