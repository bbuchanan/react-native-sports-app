import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.mysportsfeeds.com/v1.2/pull/mlb/2017-regular/"
});

instance.defaults.headers.common["authorization"] =
  "Basic YmlsbGIyMTEyOnl5ZXl5ZSQx";

export default instance;
