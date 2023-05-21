import logo from "../assets/GameHubResources/Logo/logo.webp";
import * as react from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const ModalIcon = () => {
  const { isOpen, onOpen, onClose } = react.useDisclosure();
  return (
    <>
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
              <react.ListItem>API provided by RAWG.io</react.ListItem>
              <react.ListItem>ReactQuery + Zustand</react.ListItem>
              <react.ListItem>Git + GitHub + deployed on Vercel</react.ListItem>
              <react.ListItem>Chakra</react.ListItem>
              <react.ListItem>Typescript</react.ListItem>
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
    </>
  );
};

export default ModalIcon;
