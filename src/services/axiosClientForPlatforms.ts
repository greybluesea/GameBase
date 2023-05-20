import AXIOSClient from "./AXIOSClient";
import { Platform } from "../entities/Platform";

const axiosClientForPlatforms = new AXIOSClient<Platform>(
  "/platforms/lists/parents"
);

export default axiosClientForPlatforms;
