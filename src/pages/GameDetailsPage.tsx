import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ExpandableText from "../components/GameDetailsPage/ExpandableText";
import GameAttributeItem from "../components/GameDetailsPage/GameAttributeItem";
import ScoreBadge from "../components/ScoreBadge";
import useFetchGameDetails from "../hooks/useFetchGameDetails";
import ErrorGamePage from "./ErrorGamePage";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameDetailsPage/GameTrailers";

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
      <Heading>{gameDetails.name}</Heading>
      <ExpandableText
        description_raw={gameDetails.description_raw}
        description={gameDetails.description}
      />
      <GameAttributes gameDetails={gameDetails} />
      <GameTrailers id={gameDetails.id} />
    </>
  );
};

export default GameDetailsPage;
