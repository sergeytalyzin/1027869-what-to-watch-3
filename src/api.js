import axios from "axios";
import history from "./history.js";
import {AppRoute} from "./const.js";

const Error = {
  UNRESOLVED: 401,
};

export const createAPI = (onUnresolved) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (err) => {
    const {response} = err;

    if (response.status === Error.UNRESOLVED) {
      onUnresolved();
      history.push(AppRoute.SIGN_IN);
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};


