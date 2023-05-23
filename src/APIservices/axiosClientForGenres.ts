import { Genre } from "../entities/Genre";
import AXIOSClient from "./AXIOSClient";

const axiosClientForGenres = new AXIOSClient<Genre>("/genres");

export default axiosClientForGenres;
