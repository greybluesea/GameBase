import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useFetchPlatforms from "../hooks/useFetchPlatforms";
import { BsChevronDown } from "react-icons/bs";
import useQueryGameStore from "./store";

/* interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
 */
const PlatformFilter =
  (/* { onSelectPlatform, selectedPlatform }: Props */) => {
    const { resIncludingPlatforms, error, isLoading } = useFetchPlatforms();

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
          {resIncludingPlatforms?.results.map((eachPlatform) => (
            <MenuItem
              onClick={() => selectPlatform(eachPlatform)}
              key={eachPlatform.id}
              value={eachPlatform.slug}
            >
              {eachPlatform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  };

export default PlatformFilter;
