import * as react from "@chakra-ui/react";
import { Heading, Show } from "@chakra-ui/react";
import useQueryGameStore from "../store/store";
import clearSearchInput from "../utilities/clearSearchInput";
import { Link } from "react-router-dom";

const ModalBrand = () => {
  const resetAllFilters = useQueryGameStore((state) => state.resetAllFilters);
  const { isOpen, onOpen, onClose } = react.useDisclosure();
  return (
    <>
      <Show above="md">
        <Link to="/" style={{ color: "inherit" }}>
          <div
            onClick={() => {
              onOpen();
              resetAllFilters();
              clearSearchInput();
            }}
            id="ModalBrand"
          >
            <Heading
              as="h4"
              size="md"
              style={{ marginRight: "35px", color: "inherit" }}
              cursor={"pointer"}
              paddingTop={2.5}
            >
              GameBase
            </Heading>
          </div>
        </Link>

        <react.Modal isOpen={isOpen} onClose={onClose} isCentered>
          <react.ModalOverlay />
          <react.ModalContent>
            <react.ModalHeader>
              GameBase - A lean clone of RAWG.io
            </react.ModalHeader>
            <react.ModalCloseButton />
            <react.ModalBody>
              <react.List>
                <react.ListItem>
                  API from RAWG.io (no trailer for most games)
                </react.ListItem>
                <react.ListItem>ReactQuery + Zustand</react.ListItem>
                <react.ListItem>
                  Git + GitHub + deployed on Vercel
                </react.ListItem>
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
      </Show>
    </>
  );
};

export default ModalBrand;
