import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import PlatformFilter from "../components/PlatformFilter";
import GenreSelector from "../components/GenreSelector";
import ResetBtn from "../components/ResetBtn";
import SortSelector from "../components/SortSelector";
import { Outlet } from "react-router-dom";

const HomePage = () => {
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack spacing={5} paddingStart={2} marginTop={3}>
            <Box>
              <PlatformFilter />
            </Box>
            <Box>
              <SortSelector />
            </Box>
            <Show above="lg">
              <div id="resetFiltersBtn">
                <ResetBtn />
              </div>
            </Show>
          </HStack>
          <Show below="lg">
            <HStack spacing={5} paddingStart={2} marginTop={2}>
              <Box>
                <GenreSelector />
              </Box>
              <ResetBtn />
            </HStack>
          </Show>
          <Box marginTop={2} padding={2}>
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
