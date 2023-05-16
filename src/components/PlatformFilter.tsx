import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useFetchPlatforms from "../hooks/useFetchPlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../services/axiosClientForPlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformFilter = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { resIncludingPlatforms, error, isLoading } = useFetchPlatforms();

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
        {selectedPlatform?.name || "Filter by Platform"}
      </MenuButton>
      <MenuList>
        {resIncludingPlatforms?.results.map((eachPlatform) => (
          <MenuItem
            onClick={() => onSelectPlatform(eachPlatform)}
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
