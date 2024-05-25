import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import useGameQueryStore from "../stores/gameQueryStore";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          navigate('/');
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <IoSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="filled"
          borderRadius={20}
        ></Input>
      </InputGroup>
    </form>
  );
};
