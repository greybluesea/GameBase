import { Heading, Spinner } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import RetractableText from "../components/RetractableText";
import useFetchGameDetails from "../hooks/useFetchGameDetails";
import ErrorGamePage from "./ErrorGamePage";

const GameDetailPage = () => {
  /* const { slug } = useParams(); */

  const { state } = useLocation();

  /* if (!state.id) return <ErrorGamePage />; */
  const { gameDetails, error, isLoading } = useFetchGameDetails(state.slug);
  if (isLoading) return <Spinner />;
  if (error || !gameDetails) return <ErrorGamePage />;

  return (
    <>
      <Heading>{gameDetails.name}</Heading>
      <RetractableText>{gameDetails.description_raw}</RetractableText>
      {/* <div dangerouslySetInnerHTML={{ __html: gameDetails.description }} /> */}
    </>
  );
};

export default GameDetailPage;
