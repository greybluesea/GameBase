import useFetchGameTrailers from "../../hooks/useFetchGameTrailers";

interface Props {
  id: number;
}

const GameTrailers = ({ id }: Props) => {
  const { gameTrailers, error, isLoading } = useFetchGameTrailers(id);
  if (isLoading) return null;
  if (error) return null;

  const firstTrailer = gameTrailers?.results[0];

  return firstTrailer ? (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    />
  ) : null;
};

export default GameTrailers;
