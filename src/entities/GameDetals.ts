import { Genre } from "./Genre";
import { Platform } from "./Platform";
import Publisher from "./Publisher";

export interface GameDetails {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  description: string;
  website: string;
  publishers: Publisher[];
  genres: Genre[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
