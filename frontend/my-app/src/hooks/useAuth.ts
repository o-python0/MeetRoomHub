import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GET_USERDATA } from "../constants";

export const useAuth = () => {
  const navigate = useNavigate();

  const login = useCallback((username: string, password: string) => {
    axios
      .get(GET_USERDATA)
      .then((res) => {
        if (res.data) {
          navigate("/home");
        } else {
          console.log("error");
        }
      })
      .catch(() => {
        console.log("error");
      })
      .finally(() => {
        console.log("finally");
      });
  }, []);

  return { login };
};
