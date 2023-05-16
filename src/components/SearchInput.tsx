import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            id="searchInput"
            ref={ref}
            placeholder="Search games..."
            type="search"
            variant={"filled"}
            borderRadius={20}
          />
        </InputGroup>
      </form>
      <button
        id="resetBtn"
        style={{ display: "none" }}
        onClick={() => {
          if (ref.current) ref.current.value = "";
        }}
      >
        reset
      </button>
    </>
  );
};

export default SearchInput;
