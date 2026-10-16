 
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";
 

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  useEffect(() => {
    const requestInterceptor =
      axiosSecure.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem("access-token");

          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }

          return config;
        },
        (error) => Promise.reject(error)
      );

    const responseInterceptor =
      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          const status = error.response?.status;

          // 401: token missing, invalid or expired
          if (status === 401) {
            try {
              await logOutUser();
            } finally {
              navigate("/auth/login", { replace: true });
            }
          }

          // 403: access denied  
          return Promise.reject(error);
        }
      );

    return () => {
      axiosSecure.interceptors.request.eject(
        requestInterceptor
      );

      axiosSecure.interceptors.response.eject(
        responseInterceptor
      );
    };
  }, [navigate, logOutUser]);

  return axiosSecure;
};

export default useAxiosSecure;
