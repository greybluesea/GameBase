import React from "react";
import useFetchGameDetails from "../hooks/useFetchGameDetails";
import { useLocation, useParams } from "react-router-dom";
import ErrorGamePage from "./ErrorGamePage";
import { Heading, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { state } = useLocation();
  /* if (!state.id) return <ErrorGamePage />; */
  const { gameDetails, error, isLoading } = useFetchGameDetails(state.id);

  if (error || !gameDetails) return <Heading>{error?.message}</Heading>;

  return (
    <>
      <Heading>{gameDetails.name}</Heading>
      <Text>{gameDetails.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
