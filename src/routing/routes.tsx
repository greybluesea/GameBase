import { createBrowserRouter } from "react-router-dom";
import GameGrid from "../components/GameGrid";
import HomePage from "../pages/HomePage";
import GameDetailPage from "../pages/GameDetailPage";
import ErrorPage from "../pages/ErrorPage";
import ErrorGamePage from "../pages/ErrorGamePage";

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
