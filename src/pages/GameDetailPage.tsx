import { Heading, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RetractableText from "../components/RetractableText";
import useFetchGameDetails from "../hooks/useFetchGameDetails";
import ErrorGamePage from "./ErrorGamePage";

const GameDetailPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickFilterItem = () => {
      navigate("/");
    };

    const filters = document.querySelectorAll(
      ".css-r6z5ec, .css-fv5pzg, .css-wqpdoh, .css-m4y9sm, #ModalLogo"
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
