import axios from "axios";
import AXIOSClient from "./AXIOSClinet";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const axiosClientForGenres = new AXIOSClient<Genre>("/genres");

export default axiosClientForGenres;
