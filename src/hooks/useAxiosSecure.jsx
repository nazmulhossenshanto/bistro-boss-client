import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      console.log("stop by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error?.response?.status;
      console.log("status error in the interceptor", status);

      if (status === 401 || status === 403) {
        await logOutUser();
        navigate("/auth/login");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure; 