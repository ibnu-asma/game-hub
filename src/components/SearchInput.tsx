import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { IoSearch } from "react-icons/io5"


export const SearchInput = () => {
  return (
    <InputGroup>
        <InputLeftElement><IoSearch /></InputLeftElement>
        <Input placeholder="Search games..." variant="filled" borderRadius={20}></Input>
    </InputGroup>
  )
}
