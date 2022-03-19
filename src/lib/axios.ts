import axios from "axios";
import { sessionGet } from "@/lib/common";

const httpInit = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

httpInit.interceptors.request.use(
  (config) => {
    const token = sessionGet("accessToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { httpInit };
