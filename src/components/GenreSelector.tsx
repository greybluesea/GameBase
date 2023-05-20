import React from "react";
import { Genre } from "../entities/Genre";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useFetchGenres from "../hooks/useFetchGenres";
import useQueryGameStore from "../store/store";

/* interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
} */

const GenreSelector = (/* { onSelectGenre, selectedGenre }: Props */) => {
  const { dataIncludingGenres, error, isLoading } = useFetchGenres();
  if (error) return null;

  const genreQuery = useQueryGameStore((state) => state.genreQuery);
  const selectGenre = useQueryGameStore((state) => state.selectGenre);

  /*   console.log("GenreSelector re-rendered"); */

  return (
    <Menu>
      <MenuButton
        width={"220px"}
        as={Button}
        rightIcon={<BsChevronDown />}
        textAlign={"start"}
      >
        {genreQuery?.name ? genreQuery.name : "Filter by Genre"}
        {/* {selectedGenre?.name ? selectedGenre.name : "Filter by Genre"} */}
        {/*  {`Genre by ${selectedGenre?.name || ""}`} */}
      </MenuButton>
      <MenuList>
        {dataIncludingGenres?.results.map((eachGenre) => (
          <MenuItem
            onClick={() => selectGenre(eachGenre)}
            key={eachGenre.id}
            value={eachGenre.slug}
          >
            {eachGenre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
