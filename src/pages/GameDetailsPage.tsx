import {
  Heading,
  Link,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Spinner,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import ExpandableText from "../components/GameDetailsPage/ExpandableText";
import GameScreenshots from "../components/GameDetailsPage/GameScreenshots";
import GameTrailers from "../components/GameDetailsPage/GameTrailers";
import useFetchGameDetails from "../hooks/useFetchGameDetails";
import ErrorGamePage from "./ErrorGamePage";
import SkeletonScreenshot from "../components/GameDetailsPage/SkeletonScreenshot";

const GameDetailsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSearch = () => {
      navigate("/");
    };

    const searchInput = document.querySelector("#searchInput");
    if (searchInput) {
      searchInput.addEventListener("change", handleSearch);
    }

    return () => {
      if (searchInput) {
        searchInput.removeEventListener("change", handleSearch);
      }
    };
  }, []);

  const { slug } = useParams();
  const { gameDetails, error, isLoading } = useFetchGameDetails(slug!);

  /* console.log("GameDetailPage re-rendered"); */

  if (isLoading)
    return (
      <>
        <SimpleGrid columns={{ base: 1, lg: 2 }} marginTop={3} spacing={3}>
          <div style={{ maxWidth: "768px" }}>
            <Skeleton>
              <Heading>skeleton</Heading>
            </Skeleton>
            <SkeletonText
              mt="4"
              noOfLines={{ base: 7, sm: 6, md: 5, lg: 4 }}
              spacing="4"
              skeletonHeight="2"
              marginBottom={3}
            />

            <SimpleGrid
              columns={{ base: 2, sm: 4 }}
              as="dl"
              marginBottom={"50px"}
            >
              <SkeletonText
                mt="4"
                noOfLines={7}
                spacing="4"
                skeletonHeight="2"
              />
              <SkeletonText
                mt="4"
                noOfLines={2}
                spacing="4"
                skeletonHeight="2"
              />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
              <SkeletonText
                mt="4"
                noOfLines={5}
                spacing="4"
                skeletonHeight="2"
              />
            </SimpleGrid>
          </div>
          <Stack>
            <SkeletonScreenshot />
            <SkeletonScreenshot />
            <SkeletonScreenshot />
          </Stack>
        </SimpleGrid>
      </>
    );
  if (error || !gameDetails) return <ErrorGamePage />;
  return (
    <>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={3}>
        <div style={{ maxWidth: "768px" }}>
          <Heading>
            <Link
              _hover={{ textDecoration: "none", color: "inherit" }}
              href={gameDetails.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {gameDetails.name}
            </Link>
          </Heading>

          <ExpandableText
            description_raw={gameDetails.description_raw}
            description={gameDetails.description}
          />

          <GameAttributes gameDetails={gameDetails} />
          <GameTrailers id={gameDetails.id} />
        </div>
        <VStack spacing={4}>
          <GameScreenshots slug={slug!} />
        </VStack>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
