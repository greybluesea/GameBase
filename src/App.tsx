import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";

import PlatformFilter from "./components/PlatformFilter";

import GenreSelector from "./components/GenreSelector";
import ResetBtn from "./components/ResetBtn";
import SortSelector from "./components/SortSelector";

/* export interface QueryGame {
  genre: Genre | null;
  platform: Platform | null;
  sort: Sort | null;
  search: string | null;
} */

const App = () => {
  /* const [selectedGenre, SetSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, SetSelectedPlatform] = useState<Platform | null>(
    null
  ); */
  /* const [queryGame, setQueryGame] = useState<QueryGame>({} as QueryGame); */

  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav''main'`,
          lg: `'nav nav''aside main'`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "220px  1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
          /* onSearch={(search) => setQueryGame({ ...queryGame, search })} */
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList
            /* onSelectGenre={(genre) =>
                setQueryGame({
                  ...queryGame,
                  genre: {
                    id: genre.id,
                    name: genre.name,
                    image_background: genre.image_background,
                    slug: genre.slug,
                  },
                })
              }
              selectedGenre={queryGame.genre} */
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack spacing={5} paddingStart={2} marginTop={5}>
            <Box>
              <PlatformFilter
              /* onSelectPlatform={(platform) =>
                  setQueryGame({
                    ...queryGame,
                    platform: {
                      id: platform.id,
                      name: platform.name,
                      slug: platform.slug,
                    },
                  })
                }
                selectedPlatform={queryGame.platform} */
              />
            </Box>
            <Box>
              <SortSelector
              /* onSelectSort={(sort) => setQueryGame({ ...queryGame, sort })}
                selectedSort={queryGame.sort} */
              />
            </Box>
            <Show above="lg">
              <ResetBtn />
            </Show>
          </HStack>
          <Show below="lg">
            <HStack spacing={5} paddingStart={2} marginTop={2}>
              <Box>
                <GenreSelector
                /* onSelectGenre={(genre) =>
                    setQueryGame({ ...queryGame, genre })
                  }
                  selectedGenre={queryGame.genre} */
                />
              </Box>
              <ResetBtn />
            </HStack>
          </Show>
          <GameGrid /* queryGame={queryGame} */ />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
