import { createBrowserRouter } from "react-router-dom";
import GameGrid from "../components/GameGrid";
import HomePage from "../pages/HomePage";
import GameDetailPage from "../pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { index: true, element: <GameGrid /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
