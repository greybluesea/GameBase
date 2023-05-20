import { AXIOSClientForGameDetails } from "./AXIOSClient";
import { Game } from "./axiosClientForGames";

const axiosClientForGames = new AXIOSClientForGameDetails<Game>("/games");

export default axiosClientForGames;
