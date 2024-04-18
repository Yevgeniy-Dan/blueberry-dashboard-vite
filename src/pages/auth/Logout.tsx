import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setSession } from "../../heplers/authUtils";
import { useQueryClient } from "@tanstack/react-query";

const Logout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    setSession(null);
    queryClient.invalidateQueries({ queryKey: ["isAuthenticated"] });
    navigate("../account/sign-in");
  }, [navigate, queryClient]);

  return null;
};

export default Logout;
