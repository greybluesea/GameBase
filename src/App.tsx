import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

import PlatformFilter from "./components/PlatformFilter";

import SortSelector, { Sort } from "./components/SortSelector";
import GenreSelector from "./components/GenreSelector";
import { Genre } from "./services/axiosClientForGenres";
import { Platform } from "./services/axiosClientForPlatforms";

export interface QueryGame {
  genre: Genre | null;
  platform: Platform | null;
  sort: Sort | null;
  search: string | null;
}

const App = () => {
  /* const [selectedGenre, SetSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, SetSelectedPlatform] = useState<Platform | null>(
    null
  ); */
  const [queryGame, setQueryGame] = useState<QueryGame>({} as QueryGame);

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
            onSearch={(search) => setQueryGame({ ...queryGame, search })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList
              onSelectGenre={(genre) => setQueryGame({ ...queryGame, genre })}
              selectedGenre={queryGame.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack spacing={5} paddingStart={2} marginTop={5}>
            <Box>
              <PlatformFilter
                onSelectPlatform={(platform) =>
                  setQueryGame({ ...queryGame, platform })
                }
                selectedPlatform={queryGame.platform}
              />
            </Box>
            <Box>
              <SortSelector
                onSelectSort={(sort) => setQueryGame({ ...queryGame, sort })}
                selectedSort={queryGame.sort}
              />
            </Box>
            <Show above="lg">
              <Button
                onClick={() => {
                  setQueryGame({} as QueryGame);
                  const resetBtn = document.getElementById("resetBtn");
                  if (resetBtn) resetBtn.click();
                }}
              >
                Reset filters
              </Button>
            </Show>
          </HStack>
          <Show below="lg">
            <HStack spacing={5} paddingStart={2} marginTop={2}>
              <Box>
                <GenreSelector
                  onSelectGenre={(genre) =>
                    setQueryGame({ ...queryGame, genre })
                  }
                  selectedGenre={queryGame.genre}
                />
              </Box>
              <Button
                onClick={() => {
                  setQueryGame({} as QueryGame);
                  const resetBtn = document.getElementById("resetBtn");
                  if (resetBtn) resetBtn.click();
                }}
              >
                Reset filters
              </Button>
            </HStack>
          </Show>
          <GameGrid queryGame={queryGame} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
