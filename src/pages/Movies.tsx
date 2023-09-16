import { Badge, Button, HStack, Image, Select, Show, Stack, Text, VStack, Wrap } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom"
import logo from '../assets/favicon.png';
import star from '../assets/star.png';
import twoTickets from '../assets/two-tickets.png';
import list from '../assets/list.png';
import listWhite from '../assets/list-white.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { primaryColor, secondaryColor } from "../App";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import SideBar from "../components/SideBar";
import useMovieDetail from "../hooks/useMovieDetail";

const Movies = () => {
    const { id } = useParams();

    const [hoveredPlayIcon, setHoveredPlayIcon] = useState(false);
    const { data, isLoading, error } = useMovieDetail(parseInt(id!));

    function handleHoveredIn() {
        setHoveredPlayIcon(true);
    }

    function handleHoveredOut() {
        setHoveredPlayIcon(false);
    }

    function toggleMenu() {
        // console.log('toggleMenu');
    }

    function formatMovieDuration(minutes: number) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        return `${hours}h ${remainingMinutes}m`;
    }

    function formatNumberToK(number: number) {
        if (number >= 1000) {
            const thousands = Math.floor(number / 1000);
            return `${thousands}k`;
        } else {
            return number.toString();
        }
    }

    if (error) return <Text>{error}</Text>

    if (isLoading) { return <Text>Loading...</Text> }

    return <>
        <Show below="767px">
            <Link to='/'>
                <HStack justify='space-between' padding='0 30px' alignItems='center'>
                    <HamburgerIcon fontSize='30px' onClick={toggleMenu} />
                    <HStack padding='10px 30px 0 30px'>
                        <Image src={logo} height={{ base: '2.5rem' }} cursor='pointer' />
                        <Text fontSize='24px' fontWeight='600' cursor='pointer'>MovieBox</Text>
                    </HStack>
                    <div></div>
                </HStack>
            </Link>
        </Show>

        <HStack justifyContent='space-between' alignItems='start'>
            <SideBar />

            <VStack flex='4' padding='30px'>
                <Stack position='relative' width='100%' height={{ base: '200px', md: '300px', lg: '450px' }}>
                    <Image src={"https://www.themoviedb.org/t/p/original" + data[0].poster_path} height='100%' fit='cover' borderRadius='20px' fallbackSrc="https://via.placeholder.com/1000" />
                    {data[0].video && <Stack position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' color='white' alignItems='center'>
                        <Stack padding='10px' borderRadius='50%' bg='rgba(217, 217, 217, 0.7)' width='80px' height='80px' justifyContent='center' alignItems='center' textAlign='center'>
                            <FontAwesomeIcon icon={faPlay} fontSize="50px" cursor='pointer' color={hoveredPlayIcon ? primaryColor : 'white'} onMouseEnter={handleHoveredIn} onMouseLeave={handleHoveredOut} />
                        </Stack>
                        <Text fontSize='22px'>Watch Trailer</Text>
                    </Stack>}
                </Stack>

                <Stack width='100%' direction={{ base: 'column', lg: 'row' }} justifyContent='space-between'>
                    <Stack direction={{ base: 'column', md: 'row' }} alignItems='start' margin='10px 0' fontSize={{ base: '18px', lg: '20px' }}>
                        <Text fontWeight='600'><span data-testid="movie-title">{data[0].original_title}</span> • <span data-testid="movie-release-date">{data[0].release_date.slice(0, 4)}</span> • PG-13 • <span data-testid="movie-runtime">{formatMovieDuration(data[0].runtime)}</span> </Text>
                        <Wrap>
                            {data[0].genres.map((genre, idx) => <Badge key={idx} color={primaryColor} textTransform='capitalize' border='1px solid #F8E7EB' bg='white' borderRadius='30px' padding='2px 10px' cursor='pointer'>{genre.name}</Badge>)}
                        </Wrap>
                    </Stack>

                    <HStack margin='10px 0' fontSize={{ base: '12px' }}>
                        <Image src={star} width='24px' height='24px' />
                        <Text color='blackAlpha.400'>{data[0].vote_average.toFixed(1)}</Text>
                        <Text>|</Text>
                        <Text>{formatNumberToK(data[0].vote_count)}</Text>
                    </HStack>
                </Stack>

                <Stack alignItems='start' direction={{ base: 'column', lg: 'row' }}>
                    <VStack flex='3' fontSize={{ base: '14px' }} >
                        <Text width='100%' data-testid="movie-overview">{data[0].overview}</Text>

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

                        <Stack direction={{ base: 'column', sm: 'row' }} width='100%' marginTop='30px' spacing='0' border='1px solid #C7C7C7' borderRadius='10px'>
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