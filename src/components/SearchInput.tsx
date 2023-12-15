import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
      </InputGroup>
      <Input borderRadius={20} placeholder="Search games..." variant="filled" />
    </>
  );
};

export default SearchInput;
