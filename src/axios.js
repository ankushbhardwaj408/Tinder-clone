import axios from 'axios';
const instance = axios.create({
  baseURL: "https://tinder-backend408.herokuapp.com/",
});
export default instance;