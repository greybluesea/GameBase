import { HStack, Heading, Image, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import ModalIcon from "./ModalIcon";

import logo from "../assets/GameHubResources/Logo/logo.webp";
import ModalLogo from "./ModalLogo";

/* interface Props {
  onSearch: (search: string) => void;
} */

const NavBar = (/* { onSearch }: Props */) => {
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
      <Image src={logo} boxSize="60px" cursor={"pointer"} />
      <ModalLogo />

      <SearchInput /* onSearch= {onSearch} */ />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
