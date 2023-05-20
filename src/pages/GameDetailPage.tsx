import { Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import RetractableText from "../components/RetractableText";
import useFetchGameDetails from "../hooks/useFetchGameDetails";

const GameDetailPage = () => {
  const { state } = useLocation();
  /* if (!state.id) return <ErrorGamePage />; */
  const { gameDetails, error, isLoading } = useFetchGameDetails(state.id);

  if (error || !gameDetails) return <Heading>{error?.message}</Heading>;

  return (
    <>
      <Heading>{gameDetails.name}</Heading>
      <RetractableText>{gameDetails.description_raw}</RetractableText>
    </>
  );
};

export default GameDetailPage;
