import * as react from "@chakra-ui/react";
import { HStack, Heading, Image, Show } from "@chakra-ui/react";
import logo from "../assets/GameHubResources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { isOpen, onOpen, onClose } = react.useDisclosure();
  return (
    <HStack
      justifyContent={"space-evenly"}
      padding="10px"
      paddingEnd={{
        base: "",
        lg: "3",
      }}
    >
      <Image src={logo} boxSize="60px" onClick={onOpen} cursor={"pointer"} />

      <react.Modal isOpen={isOpen} onClose={onClose} isCentered>
        <react.ModalOverlay />
        <react.ModalContent>
          <react.ModalHeader>
            GameBase - A lean clone of RAWG.io
          </react.ModalHeader>
          <react.ModalCloseButton />
          <react.ModalBody>
            <react.List>
              <react.ListItem>API provided by RAWG</react.ListItem>
              <react.ListItem>Axios http library</react.ListItem>
              <react.ListItem>deployed onto Vercel</react.ListItem>
              <react.ListItem>git commits</react.ListItem>
              <react.ListItem>Chakra UI library</react.ListItem>
              <react.ListItem>Typescript + React 18 + Vite</react.ListItem>
              <react.ListItem>
                learned from Mosh, powered by greybluesea
              </react.ListItem>
            </react.List>
          </react.ModalBody>
          <react.ModalFooter>
            <react.Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </react.Button>
          </react.ModalFooter>
        </react.ModalContent>
      </react.Modal>

      <Show above="md">
        <Heading as="h4" size="md" style={{ marginRight: "50px" }}>
          GameBase
        </Heading>
      </Show>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
