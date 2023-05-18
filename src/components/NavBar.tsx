import { HStack, Heading, Image, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import ModalIcon from "./ModalIcon";

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
      <ModalIcon />
      <Show above="md">
        <Heading as="h4" size="md" style={{ marginRight: "50px" }}>
          GameBase
        </Heading>
      </Show>
      <SearchInput /* onSearch= {onSearch} */ />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
