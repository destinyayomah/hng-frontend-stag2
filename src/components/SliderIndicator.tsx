import { MinusIcon } from "@chakra-ui/icons"
import { Text } from "@chakra-ui/react"

interface Props {
    index: number,
    currentSlide: number,
    onCurrentSlider: (index: number) => void
}

export const SliderIndicator = ({ index, currentSlide, onCurrentSlider }: Props) => {
    return (
        <Text
            color={index === currentSlide ? 'white' : 'whiteAlpha.500'}
            cursor='pointer' textAlign='right'
            onClick={() => onCurrentSlider(index)}
            _hover={{ color: 'white' }}>{index === currentSlide && <MinusIcon />}
            {index}
        </Text>
    )
}
