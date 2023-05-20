import AXIOSClient from "./AXIOSClient";
import { Game } from "../entities/Game";

const axiosClientForGames = new AXIOSClient<Game>("/games");

export default axiosClientForGames;
