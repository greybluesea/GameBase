import { Game } from "../entities/Game";
import AXIOSClient from "./AXIOSClient";

const axiosClientForGames = new AXIOSClient<Game>("/games");

export default axiosClientForGames;
