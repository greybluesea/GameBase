import { HStack, Heading, Image, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

import logo from "../assets/GameHubResources/Logo/logo.webp";
import ModalBrand from "./ModalBrand";
import useQueryGameStore from "../store/store";
import clearSearchInput from "../utilities/clearSearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  const resetAllFilters = useQueryGameStore((state) => state.resetAllFilters);
  /* console.log("NavBar re-rendered"); */
  return (
    <HStack
      justifyContent={"space-evenly"}
      paddingY="10px"
      paddingX={{
        base: "10px",
        lg: "20px",
      }}
    >
      <Link
        to="/"
        style={{
          marginRight: "8px",
        }}
      >
        <Image
          src={logo}
          boxSize="60px"
          cursor={"pointer"}
          objectFit={"cover"}
          style={{ overflow: "visible" }}
          onClick={() => {
            resetAllFilters();
            clearSearchInput();
          }}
        />
      </Link>
      <ModalBrand />

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
