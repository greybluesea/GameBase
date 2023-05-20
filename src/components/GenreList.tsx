import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useFetchGenres from "../hooks/useFetchGenres";
import getCroppedImageURL from "../hooks/CropImage";
import { Genre } from "../entities/Genre";
import useQueryGameStore from "../store/store";
import GenreSelector from "./GenreSelector";

/* interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
} */

const GenreList = (/* { onSelectGenre, selectedGenre }: Props */) => {
  const { dataIncludingGenres, error, isLoading } = useFetchGenres();
  const spinnerArray = [1, 2, 3, 4, 5, 6];
  if (error) return null;

  const genreQuery = useQueryGameStore((state) => state.genreQuery);
  const selectGenre = useQueryGameStore((state) => state.selectGenre);

  /*  console.log("GenreList re-rendered"); */
  return (
    <Box marginTop={3}>
      {/* <GenreSelector /> */}
      <List spacing={4} marginTop={5}>
        {isLoading && (
          <VStack spacing={4} alignItems={"start"}>
            {spinnerArray.map((each) => (
              <Spinner key={each} size={"xl"} />
            ))}
          </VStack>
        )}
        {dataIncludingGenres?.results.map((eachGenre) => (
          <ListItem key={eachGenre.id}>
            <HStack>
              <Image
                src={getCroppedImageURL(eachGenre.image_background)}
                boxSize={12}
                borderRadius={8}
                objectFit={"cover"}
                objectPosition={"center"}
              ></Image>
              <Button
                key={eachGenre.id}
                fontWeight={eachGenre.id === genreQuery?.id ? "bold" : "normal"}
                fontSize="lg"
                marginTop={"16px"}
                marginBottom={"0"}
                variant={"ghost"}
                whiteSpace={"normal"}
                textAlign={"start"}
                onClick={() => selectGenre(eachGenre)}
              >
                {eachGenre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
