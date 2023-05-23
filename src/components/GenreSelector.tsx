import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useFetchGenres from "../hooks/useFetchGenres";
import useQueryGameStore from "../store/store";
import { Link } from "react-router-dom";

const GenreSelector = () => {
  const { dataIncludingGenres, error, isLoading } = useFetchGenres();
  if (error) return null;

  const genreQuery = useQueryGameStore((state) => state.genreQuery);
  const selectGenre = useQueryGameStore((state) => state.selectGenre);

  /* console.log("GenreSelector re-rendered"); */

  return (
    <Menu>
      <MenuButton
        width={"220px"}
        as={Button}
        rightIcon={<BsChevronDown />}
        textAlign={"start"}
      >
        {genreQuery?.name ? genreQuery.name : "Filter by Genre"}
      </MenuButton>
      <MenuList>
        {dataIncludingGenres?.results.map((eachGenre) => (
          <Link to="/" key={eachGenre.id}>
            <MenuItem
              onClick={() => {
                selectGenre(eachGenre);
              }}
              value={eachGenre.slug}
            >
              {eachGenre.name}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
