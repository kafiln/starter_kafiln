"use client";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";

export type GetToken = ReturnType<typeof useAuth>["getToken"];

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to ensure all URLs have a trailing slash
// axiosInstance.interceptors.request.use((config) => {
//   if (config.url && !config.url.endsWith('/')) {
//     config.url += '/';
//   }
//   return config;
// });

export const setupAxiosInterceptors = (getToken: GetToken) => {
  axiosInstance.interceptors.request.use(
    async (config) => {
      try {
        const token = await getToken();
        if (!token) {
          // Throw an error or reject the promise if the token is not available
          return Promise.reject(new Error("Authentication token is missing."));
        }
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Error getting Clerk token", error);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const useSetupAxiosInterceptors = () => {
  const { getToken } = useAuth();

  // Ensure interceptors are set up once
  useEffect(() => {
    setupAxiosInterceptors(getToken);
  }, [getToken]);
};

export default axiosInstance;
