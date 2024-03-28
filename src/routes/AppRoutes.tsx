import { BrowserRouter, Route, Routes } from "react-router-dom";
import { allRoutes } from "./index";
import Vertical from "../layouts/Vertical";
import Default from "../layouts/Default";

const AppRoutes = () => {
  return (
    <BrowserRouter basename={"/admin"}>
      <div className="bg-light has-right-panel ">
        <Default />
        <Vertical />
        <Routes>
          {allRoutes.map((route, index) => (
            <Route key={index} element={route.element} path={route.path} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
