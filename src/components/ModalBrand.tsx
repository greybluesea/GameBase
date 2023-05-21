import * as react from "@chakra-ui/react";
import { Heading, Show } from "@chakra-ui/react";
import useQueryGameStore from "../store/store";
import clearSearchInput from "../utilities/clearSearchInput";

const ModalBrand = () => {
  const resetAllFilters = useQueryGameStore((state) => state.resetAllFilters);
  const { isOpen, onOpen, onClose } = react.useDisclosure();
  return (
    <>
      <Show above="md">
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
            style={{ marginRight: "45px" }}
            cursor={"pointer"}
            paddingTop={2.5}
          >
            GameBase
          </Heading>
        </div>

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
