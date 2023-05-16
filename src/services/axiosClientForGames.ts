import AXIOSClient from "./AXIOSClinet";
import { Platform } from "./axiosClientForPlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const axiosClientForGames = new AXIOSClient<Game>("/games");

export default axiosClientForGames;
