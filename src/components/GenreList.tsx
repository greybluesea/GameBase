import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import getCroppedImageURL from "../utilities/CropImage";
import useFetchGenres from "../hooks/useFetchGenres";
import useQueryGameStore from "../store/store";
import { Link } from "react-router-dom";

const GenreList = () => {
  const { dataIncludingGenres, error, isLoading } = useFetchGenres();

  const spinnerArray = [1, 2, 3, 4, 5, 6];
  if (error) return null;

  const genreQuery = useQueryGameStore((state) => state.genreQuery);
  const selectGenre = useQueryGameStore((state) => state.selectGenre);

  /* console.log("GenreList re-rendered"); */
  return (
    <Box marginTop={3}>
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
              <Box marginTop={"16px"} marginBottom={"0"}>
                <Link to="/">
                  <Button
                    key={eachGenre.id}
                    fontWeight={
                      eachGenre.id === genreQuery?.id ? "bold" : "normal"
                    }
                    fontSize="lg"
                    variant={"ghost"}
                    whiteSpace={"normal"}
                    textAlign={"start"}
                    onClick={() => selectGenre(eachGenre)}
                  >
                    {eachGenre.name}
                  </Button>
                </Link>
              </Box>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
