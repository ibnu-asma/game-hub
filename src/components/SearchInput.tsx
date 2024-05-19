import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { IoSearch } from "react-icons/io5"


interface Props {
  onSearch: (searchText: string) => void;
}


export const SearchInput = ({ onSearch } : Props) => {
  const ref =useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event)=> 
       { event.preventDefault();
      if(ref.current) onSearch(ref.current.value)}
    }>
    <InputGroup>
        <InputLeftElement><IoSearch /></InputLeftElement>
        <Input ref= {ref} placeholder="Search games..." variant="filled" borderRadius={20}></Input>
    </InputGroup>

    </form>
  )
}
