import React from "react";
import { Genre } from "../services/axiosClientForGenres";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useFetchGenres from "../hooks/useFetchGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreSelector = ({ onSelectGenre, selectedGenre }: Props) => {
  const { resIncludingGenres, error, isLoading } = useFetchGenres();
  if (error) return null;

  return (
    <Menu>
      <MenuButton
        width={"220px"}
        as={Button}
        rightIcon={<BsChevronDown />}
        textAlign={"start"}
      >
        {selectedGenre?.name ? selectedGenre.name : "Filter by Genre"}
        {/*  {`Genre by ${selectedGenre?.name || ""}`} */}
      </MenuButton>
      <MenuList>
        {resIncludingGenres?.results.map((eachGenre) => (
          <MenuItem
            onClick={() => onSelectGenre(eachGenre)}
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
