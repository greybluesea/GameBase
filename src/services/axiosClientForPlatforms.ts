import AXIOSClient from "./AXIOSClinet";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const axiosClientForPlatforms = new AXIOSClient<Platform>(
  "/platforms/lists/parents"
);

export default axiosClientForPlatforms;
