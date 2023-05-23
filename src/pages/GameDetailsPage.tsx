import { Heading, SimpleGrid, Spinner, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import ExpandableText from "../components/GameDetailsPage/ExpandableText";
import GameScreenshots from "../components/GameDetailsPage/GameScreenshots";
import GameTrailers from "../components/GameDetailsPage/GameTrailers";
import useFetchGameDetails from "../hooks/useFetchGameDetails";
import ErrorGamePage from "./ErrorGamePage";

const GameDetailsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickFilterItem = () => {
      navigate("/");
    };

    const filters = document.querySelectorAll(
      ".css-r6z5ec, .css-fv5pzg, .css-wqpdoh, .css-m4y9sm, #ModalBrand"
    );
    if (filters) {
      filters.forEach((each) =>
        each.addEventListener("click", handleClickFilterItem)
      );
    }

    const searchInput = document.querySelector("#searchInput");
    if (searchInput) {
      searchInput.addEventListener("change", handleClickFilterItem);
    }

    return () => {
      if (filters) {
        filters.forEach((each) =>
          each.removeEventListener("click", handleClickFilterItem)
        );
      }

      if (searchInput) {
        searchInput.removeEventListener("change", handleClickFilterItem);
      }
    };
  }, []);

  const { slug } = useParams();
  const { gameDetails, error, isLoading } = useFetchGameDetails(slug!);

  if (isLoading) return <Spinner size={"lg"} />;
  if (error || !gameDetails) return <ErrorGamePage />;

  /* console.log("GameDetailPage re-rendered"); */

  return (
    <>
      {" "}
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <div style={{ maxWidth: "768px" }}>
          <Heading>
            <a
              href={gameDetails.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {gameDetails.name}
            </a>
          </Heading>

          <ExpandableText
            description_raw={gameDetails.description_raw}
            description={gameDetails.description}
          />

          <GameAttributes gameDetails={gameDetails} />
          <GameTrailers id={gameDetails.id} />
        </div>
        <VStack spacing={4} alignItems={"start"}>
          <div
            style={{
              maxWidth: "768px",
              /* display: "flex",
            alignItems: "start", */
            }}
          >
            <GameScreenshots slug={slug!} />
          </div>
        </VStack>{" "}
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
