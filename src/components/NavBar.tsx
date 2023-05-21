import { HStack, Heading, Image, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

import logo from "../assets/GameHubResources/Logo/logo.webp";
import ModalBrand from "./ModalBrand";
import useQueryGameStore from "../store/store";

const NavBar = () => {
  const resetAllFilters = useQueryGameStore((state) => state.resetAllFilters);
  /* console.log("NavBar re-rendered"); */
  return (
    <HStack
      justifyContent={"space-evenly"}
      padding="10px"
      paddingEnd={{
        base: "",
        lg: "3",
      }}
    >
      <Image
        src={logo}
        boxSize="60px"
        cursor={"pointer"}
        onClick={() => {
          resetAllFilters();
          const resetBtn = document.getElementById("resetBtn");
          if (resetBtn) resetBtn.click();
        }}
      />
      <ModalBrand />

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
