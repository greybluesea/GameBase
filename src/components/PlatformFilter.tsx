import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useFetchPlatforms from "../hooks/useFetchPlatforms";
import { BsChevronDown } from "react-icons/bs";
import useQueryGameStore from "../store/store";
import { Link } from "react-router-dom";

const PlatformFilter = () => {
  const { dataIncludingPlatforms, error, isLoading } = useFetchPlatforms();

  const platformQuery = useQueryGameStore((state) => state.platformQuery);
  const selectPlatform = useQueryGameStore((state) => state.selectPlatform);

  /* console.log("PlatformFilter re-rendered"); */

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        width={"220px"}
        as={Button}
        rightIcon={<BsChevronDown />}
        textAlign={"start"}
      >
        {/*  {selectedPlatform?.name ? selectedPlatform.name : "Filter by Platform"} */}
        {platformQuery?.name || "Filter by Platform"}
      </MenuButton>
      <MenuList>
        {dataIncludingPlatforms?.results.map((eachPlatform) => (
          <Link to="/" key={eachPlatform.id} style={{ color: "inherit" }}>
            <MenuItem
              onClick={() => selectPlatform(eachPlatform)}
              value={eachPlatform.slug}
            >
              {eachPlatform.name}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformFilter;
