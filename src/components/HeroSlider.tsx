import { Button, Container, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import dataSlider from './dataSlider';
import imdb from '../assets/imdb.png';
import play from '../assets/play.png'
import { SliderIndicator } from './SliderIndicator';
import { useEffect, useState } from 'react';
const primaryColor = '#BE123C';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(dataSlider[0]);
  const [imageVisible, setImageVisible] = useState(true);

  function changeSelectedIndicator(index: number) {
    setCurrentSlide(index);
    setSelectedMovie(dataSlider[index - 1]);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = currentSlide + 1;
      setImageVisible(false);

      if (nextSlide <= dataSlider.length) {
        setTimeout(() => {
          setCurrentSlide(nextSlide);
          setSelectedMovie(dataSlider[nextSlide - 1]);
          setImageVisible(true);
        }, 200);
      } else {
        setCurrentSlide(1);
        setSelectedMovie(dataSlider[0]);
        setImageVisible(true);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <Stack height='90vh' overflow='hidden' position='relative'>

      <div style={{ height: '90vh' }}>
        <Image
          src={selectedMovie.image}
          alt={selectedMovie.title}
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
            {selectedMovie.title}
          </Text>

          <HStack>
            <Image src={imdb} />
            <Text color='whiteAlpha.700'>86.0 / 100</Text>
            <Text>🍎</Text>
            <Text color='whiteAlpha.700'> 97%</Text>
          </HStack>

          <Text color='white' fontSize={{ base: "12px", md: "16px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugit, rem numquam iste quis vel eveniet doloribus temporibus praesentium aliquam at tempore commodi? Ipsum, eius suscipit. Ab alias eos architecto.</Text>

          <Button color="white" colorScheme='blackAlpha' bg={primaryColor} leftIcon={<Image src={play} />}>WATCH TRAILER</Button>
        </VStack>
      </div>


      <VStack position='absolute' right='30px' height='100%' justifyContent='center' alignItems='right'>
        {dataSlider.map((movie, index) => <SliderIndicator key={movie.id} index={index + 1} currentSlide={currentSlide} onCurrentSlider={changeSelectedIndicator} />)}
      </VStack>
    </Stack>
  )
}

export default HeroSlider