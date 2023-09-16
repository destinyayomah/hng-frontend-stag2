import { ChevronRightIcon } from '@chakra-ui/icons'
import { HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { primaryColor } from '../App'
import MovieCard from './MovieCard'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import { Link } from 'react-router-dom'

const Featured = () => {
    const { data, isLoading, error } = useTopRatedMovies();

    if (error) return <Text>{error}</Text>;

    return (
        <Stack padding='60px 5%'>
            <HStack justifyContent='space-between' marginBottom='50px'>
                <Text fontSize={{ base: '20px', sm: '28px', md: '36px' }} fontWeight='700'>Feaured Movie</Text>
                <HStack cursor='pointer'>
                    <Text fontSize={{ base: '12px', sm: '14px', md: '16px', lg: '18x' }} color={primaryColor} fontWeight='600'>See More </Text>
                    <ChevronRightIcon fontSize={{ base: '18px', sm: '24', lg: '30px' }} color={primaryColor} />
                </HStack>
            </HStack>

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing='100px'>
                {!isLoading && data.slice(0, 10).map((movie, index) =>
                    <Link to={'/movies/' + movie.id} key={index}>
                        <MovieCard index={index} movie={movie} moviesCount={data.slice(0, 10).length} />
                    </Link>
                )}
            </SimpleGrid>
        </Stack>
    )
}

export default Featured