import { HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Movie } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imdb from '../assets/imdb.png'
import movies from './movies'
import { useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface Props {
    index: number,
    movie: Movie
}

const MovieCard = ({ index, movie }: Props) => {
    function hoverBuilder() {
        const array = [];
        for (let i = 0; i < movies.length; i++) {
            array.push(false);
        }
        return array;
    }

    const [hoveredLoveIcon, setHoverLoveIcon] = useState(hoverBuilder());

    const handleLoveIconHover = (index: number) => {
        const updatedHoveredIcons = [...hoveredLoveIcon];
        updatedHoveredIcons[index] = true;
        setHoverLoveIcon(updatedHoveredIcons);

    };

    const handleLoveIconHoverExit = (index: number) => {
        const updatedHoveredIcons = [...hoveredLoveIcon];
        updatedHoveredIcons[index] = false;
        setHoverLoveIcon(updatedHoveredIcons);
    };

    return (
        <VStack justifyContent='space-between' alignItems='start'>
            <Stack width='100%' position='relative'>
                <Image src={movie.image} />
                
                <Stack position='absolute' top='15px' left='15px' bg='whiteAlpha.500' padding='4px 10px' borderRadius='30px'>
                    <Text fontSize='12px' fontWeight='600'>TV SERIES</Text>
                </Stack>

                <Stack bg='whiteAlpha.500' padding='8px' position='absolute' right='15px' top='15px' borderRadius='50%'>
                    <FontAwesomeIcon
                        icon={faHeart}
                        cursor='pointer'
                        onMouseEnter={() => handleLoveIconHover(index)}
                        onMouseLeave={() => handleLoveIconHoverExit(index)}
                        style={hoveredLoveIcon[index] ? { color: 'red' } : { color: 'F3F4F6' }}
                    />
                </Stack>
            </Stack>

            <Text color='gray.400' fontSize='12' fontWeight='600'>USA, 2016 - Current</Text>

            <Text fontSize='18px' fontWeight='700'>{movie.title}</Text>

            <HStack justifyContent='space-between' width='100%'>
                <HStack>
                    <Image src={imdb} />
                    <Text>86.0 / 100</Text>
                </HStack>
                <HStack>
                    <Text>🍎</Text>
                    <Text>97%</Text>
                </HStack>
            </HStack>

            <Text color='gray.400' fontSize='12' fontWeight='600'>Action, Adventure, Horror</Text>
        </VStack>
    )
}

export default MovieCard