import { HStack, Link, Stack, Text } from '@chakra-ui/react'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <Stack marginTop='100px'>
            <HStack justifyContent='center' spacing='50px'>
                <FontAwesomeIcon fontSize='30px' icon={faFacebookSquare} cursor='pointer' />
                <FontAwesomeIcon fontSize='30px' icon={faInstagram} cursor='pointer' />
                <FontAwesomeIcon fontSize='30px' icon={faTwitter} cursor='pointer' />
                <FontAwesomeIcon fontSize='30px' icon={faYoutube} cursor='pointer' />
            </HStack>

            <Stack direction={{base: 'column', sm: 'row'}} justifyContent='center' alignItems='center' spacing='30px' marginTop='30px'>
                <Link fontSize='18px' fontWeight='700'>Conditions of Use</Link>
                <Link fontSize='18px' fontWeight='700'>Privacy & Policy</Link>
                <Link fontSize='18px' fontWeight='700'>Press Room</Link>
            </Stack>

            <HStack justifyContent='center' margin='30px 0'>
                <Text fontSize={{base: '14px', sm: '18px'}} fontWeight='700' color='blackAlpha.600'>&copy; {new Date().getFullYear()} MovieBox by Destiny Ayomah</Text>
            </HStack>
        </Stack>
    )
}

export default Footer