import { GameDetails } from "../entities/GameDetals";
import AXIOSClient from "./AXIOSClient";

const axiosClientForGames = new AXIOSClient<GameDetails>("/games");

export default axiosClientForGames;
