import axios from "axios";

const instance = axios.create({
  baseURL: " https://tiktok-clonetesting.herokuapp.com/",
});

export default instance;
