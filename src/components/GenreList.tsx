import {
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
import { Genre } from "../services/axiosClientForGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { resIncludingGenres, error, isLoading } = useFetchGenres();
  const spinnerArray = [1, 2, 3, 4, 5, 6];
  if (error) return null;
  return (
    <>
      <List spacing={4} marginTop={5}>
        {isLoading && (
          <VStack spacing={4} alignItems={"start"}>
            {spinnerArray.map((each) => (
              <Spinner key={each} size={"xl"} />
            ))}
          </VStack>
        )}
        {resIncludingGenres?.results.map((eachGenre) => (
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
                fontWeight={
                  eachGenre.id === selectedGenre?.id ? "bold" : "normal"
                }
                fontSize="lg"
                marginTop={"16px"}
                marginBottom={"0"}
                variant={"ghost"}
                whiteSpace={"normal"}
                textAlign={"start"}
                onClick={() => onSelectGenre(eachGenre)}
              >
                {eachGenre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
