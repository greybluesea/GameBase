import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useQueryGameStore from "../store/store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useQueryGameStore((state) => state.setSearchText);
  /* console.log("SearchInput re-rendered"); */

  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) setSearchText(ref.current.value);
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
