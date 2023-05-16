import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6dfec956e48b4b14960840e09578d4c5",
  },
});
