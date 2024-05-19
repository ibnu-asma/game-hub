import meh from "../assets/meh.webp"
import bull from "../assets/bulls-eye.webp"
import thumb from "../assets/thumbs-up.webp"
import {Image, ImageProps} from "@chakra-ui/react"

interface Props  {
    rating: number
}

export const Imoji = ({rating} : Props) => {
    if(rating < 3) return null;
    const imojiMap : {[key : number] : ImageProps}  = {
        3: {src: meh, alt: 'meh', boxSize: "25px"},
        4: {src: thumb, alt: 'recommended', boxSize: "25px"},
        5: {src: bull, alt: 'exceptional', boxSize: "35px"}
    }
  return (
    <Image {...imojiMap[rating]} boxSize="25px" paddingTop={1}></Image>
  )
}
