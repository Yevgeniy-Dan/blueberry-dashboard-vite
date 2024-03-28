import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("../account/sign-in");
  }, [navigate]);

  return null;
};

export default Logout;
