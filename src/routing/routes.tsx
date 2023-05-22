import { createBrowserRouter } from "react-router-dom";
import GameGrid from "../components/GameGrid";
import ErrorPage from "../pages/ErrorPage";
import GameDetailPage from "../pages/GameDetailsPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <GameGrid /> },
      {
        path: "games/:slug",
        element: <GameDetailPage />,
        /*  errorElement: <ErrorGamePage />, */
      },
    ],
  },
]);

export default router;
