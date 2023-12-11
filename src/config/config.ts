import axios from "axios";
const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_END_POINT,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json",
    Accept: "application/json",
  },
  timeout: 2000,
});

API.interceptors.request.use(
  function (config:any) {
    const token = localStorage.getItem("token");
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
API.interceptors.response.use(
  function (response) {
    return response;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await API.post("/auth/refresh-token", {
            refreshToken: window.localStorage.getItem("refresh_token"),
          });
          console.log("refershTOkenResp", rs);
          const { accessToken } = rs.data;
          window.localStorage.setItem("token", accessToken);
          API.defaults.headers["Authorization"] = `Bearer ${accessToken}`;

          return API(originalConfig);
        } catch (_error:any) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }

          return Promise.reject(_error);
        }
      }

      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  }
);
export default API;
