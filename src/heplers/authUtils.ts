// @flow
//import jwtDecode from 'jwt-decode';
import { Cookies } from "react-cookie";

const isUserAuthenticated = () => {
  const user = getLoggedInUser();
  if (!user) {
    return false;
  }

  return true;
};

const getLoggedInUser = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");

  return user ? (typeof user == "object" ? user : JSON.parse(user)) : null;
};

const setSession = (user: { id: string; email: string } | null) => {
  const cookies = new Cookies();
  if (user) {
    cookies.set("user", JSON.stringify(user), { path: "/" });
  } else {
    cookies.remove("user", { path: "/" });
  }
};

export { isUserAuthenticated, getLoggedInUser, setSession };
