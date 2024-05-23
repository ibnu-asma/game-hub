import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { IoSearch } from "react-icons/io5"
import useGameQueryStore from "../stores/gameQueryStore";




export const SearchInput = () => {
  const ref =useRef<HTMLInputElement>(null);
  const setSearchText  = useGameQueryStore(s => s.setSearchText);
  return (
    <form onSubmit={(event)=> 
       { event.preventDefault();
      if(ref.current) setSearchText(ref.current.value)}
    }>
    <InputGroup>
        <InputLeftElement><IoSearch /></InputLeftElement>
        <Input ref= {ref} placeholder="Search games..." variant="filled" borderRadius={20}></Input>
    </InputGroup>

    </form>
  )
}
