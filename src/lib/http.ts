import axios from "axios";
import { sessionGet } from "@/lib/common";

export const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

http.interceptors.request.use(
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
