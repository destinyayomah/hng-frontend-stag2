import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Movie, baseImgUrl, primaryColor } from "../App"
import { CalendarIcon } from "@chakra-ui/icons"

interface Props {
    movie: Movie
}

const SearchCard = ({ movie }: Props) => {
    return <>
        <Link to={'/movies/' + movie.id}>
            <VStack width='100%' spacing='0'>
                <Image src={baseImgUrl + movie.poster_path} width='100%' fit='cover' height='200px' borderRadius='5px 5px 0 0' fallbackSrc='https://via.placeholder.com/200' />
                <Box bg={primaryColor} width='100%' color='white' padding='10px' borderRadius='0 0 5px 5px' fontSize='14px' fontWeight='600'>
                    <Text>{movie.original_title}</Text>
                    <HStack color='whiteAlpha.700'>
                        <CalendarIcon />
                        <Text>{movie.release_date}</Text>
                    </HStack>
                </Box>
            </VStack>
        </Link>
    </>
}

export default SearchCard