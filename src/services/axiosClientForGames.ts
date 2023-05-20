import AXIOSClient from "./AXIOSClient";
import { Platform } from "./axiosClientForPlatforms";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const axiosClientForGames = new AXIOSClient<Game>("/games");

export default axiosClientForGames;
