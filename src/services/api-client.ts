import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "623aa29b1a0744cca3395d213db3cb50",
  },
});
