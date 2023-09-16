import { HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { baseImgUrl } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imdb from '../assets/imdb.png'
import { useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Movies } from '../hooks/useTopRatedMovies'
import useMovieDetail from '../hooks/useMovieDetail'

interface Props {
    index: number,
    movie: Movies,
    moviesCount: number
}

const MovieCard = ({ index, movie, moviesCount }: Props) => {
    const { data, isLoading, error } = useMovieDetail(movie.id);

    function hoverBuilder() {
        const array = [];
        for (let i = 0; i < moviesCount; i++) {
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

    if (error) return <Text>{error}</Text>;

    if (isLoading) return <Text>Loading</Text>

    return <>
        <VStack justifyContent='space-between' alignItems='start' data-testid="movie-card">
            <Stack width='100%' position='relative'>
                <Image src={baseImgUrl + movie.poster_path} data-testid="movie-poster" />

                {/* <Stack position='absolute' top='15px' left='15px' bg='whiteAlpha.500' padding='4px 10px' borderRadius='30px'>
                    <Text fontSize='12px' fontWeight='600'>TV SERIES</Text>
                </Stack> */}

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

            <Text color='gray.400' fontSize='12' fontWeight='600'>{data[0].production_countries[0].iso_3166_1}, <span data-testid="movie-release-date">{data[0].release_date.slice(0, 4)}</span> - Current</Text>

            <Text fontSize='18px' fontWeight='700' data-testid="movie-title">{data[0].original_title}</Text>

            <HStack justifyContent='space-between' width='100%'>
                <HStack>
                    <Image src={imdb} />
                    <Text>{Math.round(data[0].vote_average * 10)} / 100</Text>
                </HStack>

                <HStack>
                    <Text>🍎</Text>
                    <Text>{(data[0].popularity).toFixed(0)}%</Text>
                </HStack>
            </HStack>

            <Text color='gray.400' fontSize='12' fontWeight='600'>{data[0].genres.map(genre => <span key={genre.id}>{genre.name} </span>)}</Text>
        </VStack>
    </>
}

export default MovieCard