import { Button, Container, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import imdb from '../assets/imdb.png';
import play from '../assets/play.png'
import { SliderIndicator } from './SliderIndicator';
import { useEffect, useState } from 'react';
import usePopularMovies from '../hooks/usePopularMovies';
import { Movie, baseImgUrlO } from '../App';
const primaryColor = '#BE123C';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [imageVisible, setImageVisible] = useState(true);
  const { data, isLoading, error } = usePopularMovies();

  const [selectedMovie, setSelectedMovie] = useState<Movie>({} as Movie);

  function changeSelectedIndicator(index: number) {
    setCurrentSlide(index);
    setSelectedMovie(data[index - 1]);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = currentSlide + 1;
      setImageVisible(false);

      if (nextSlide <= data.slice(0, 5).length) {
        setTimeout(() => {
          setCurrentSlide(nextSlide);
          setSelectedMovie(data[nextSlide - 1]);
          setImageVisible(true);
        }, 200);
      } else {
        setCurrentSlide(1);
        setSelectedMovie(data[0]);
        setImageVisible(true);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide, data]);

  useEffect(() => {
    if (!isLoading) {
      setSelectedMovie(data[0]);
    }
  }, [data]);

  if (error) return <Text>{error}</Text>

  if (isLoading) return <Text>Loading...</Text>

  return <>
    <Stack height='90vh' overflow='hidden' position='relative'>

      <div style={{ height: '90vh' }}>
        <Image
          src={baseImgUrlO + selectedMovie.poster_path}
          alt={selectedMovie.original_title}
          width='100%'
          height='100%'
          objectFit='cover'
          fallbackSrc='https://via.placeholder.com/1000'
          style={{
            transition: 'opacity 1s ease-in-out',
            opacity: (imageVisible ? 1 : 0)
          }}
        />

        <Container margin='0' top='0' bottom='0' position='absolute' maxWidth='none' bg='blackAlpha.700'></Container>

        <VStack
          spacing={{ base: '10px', sm: '20px', md: '30px' }}
          position='absolute' top='0' left='5%' align='start'
          maxWidth={{ base: '250px', sm: '300px', md: '400px' }}
          height='100%' justifyContent='center'
        >
          <Text
            fontSize={{ base: '30px', md: '38', lg: '48px' }}
            color='white'
            fontWeight='600'
            lineHeight='1'
          >
            {selectedMovie.original_title}
          </Text>

          <HStack>
            <Image src={imdb} />
            <Text color='whiteAlpha.700'>{selectedMovie.vote_average && (selectedMovie.vote_average * 10).toFixed(1)} / 100</Text>
            <Text>🍎</Text>
            <Text color='whiteAlpha.700'> {selectedMovie.popularity && selectedMovie.popularity.toFixed(0)}%</Text>
          </HStack>

          <Text color='white' fontSize={{ base: "12px", md: "16px" }}>{selectedMovie.overview && selectedMovie.overview.substring(0, 210)}{selectedMovie.overview && selectedMovie.overview.length > 210 && '...'}</Text>

          <Button color="white" colorScheme='blackAlpha' bg={primaryColor} leftIcon={<Image src={play} />}>WATCH TRAILER</Button>
        </VStack>
      </div>


      <VStack position='absolute' right='30px' height='100%' justifyContent='center' alignItems='right'>
        {data.slice(0, 5).map((movie, index) => <SliderIndicator key={movie.id} index={index + 1} currentSlide={currentSlide} onCurrentSlider={changeSelectedIndicator} />)}
      </VStack>
    </Stack>
  </>
}

export default HeroSlider