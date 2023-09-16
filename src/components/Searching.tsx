import { Box, Show, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import SearchCard from './SearchCard'
import SearchCardSkeleton from './SearchCardSkeleton'
import useSearch from '../hooks/useSearch'
import { Movie } from '../App'
import SearchField from './SearchField'

interface Props {
    keyword: string,
    onChange: (keyword: string) => void
}

const Searching = ({ keyword, onChange }: Props) => {
    const { data, isLoading, error }: { data: Movie[], isLoading: boolean, error: string } = useSearch(keyword);
    const sk = [1, 2, 3, 4, 5, 6, 7];

    if (error) return <Text color='white'>{error}</Text>

    return <>
        <Box bg='black' width='100%' minHeight='100vh' padding='5%'>
            <VStack height={{ base: '100px' }} justifyContent='center'>
                <Box height={{ base: '30px' }}></Box>
                <Show below="991px">
                    <SearchField onChange={onChange} />
                </Show>
            </VStack>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing='10px'>
                {isLoading ? sk.map((i) => <SearchCardSkeleton key={i} />) : data.map((movie, i) => <SearchCard key={i} movie={movie} />)}
            </SimpleGrid>
        </Box>
    </>
}

export default Searching