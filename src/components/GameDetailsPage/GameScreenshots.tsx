import { useEffect } from "react";
import useFetchGameScreenshots from "../../hooks/useFetchGameSreenshots";

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const { gameScreenshots, error, isLoading } = useFetchGameScreenshots(slug);
  if (isLoading) return null;
  if (error) return null;

  console.log("re-rendered");

  useEffect(() => {
    const firstImage = document.querySelector(".carousel-item:first-child");
    if (firstImage) {
      firstImage.classList.add("active");
    }
  }, []);

  return gameScreenshots ? (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          {gameScreenshots.results.map((each) => (
            <div className="carousel-item" key={each.id}>
              <img
                src={each.image}
                className="d-block w-100"
                alt={"image-" + each.id + " for " + slug}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  ) : null;
};
export default GameScreenshots;
