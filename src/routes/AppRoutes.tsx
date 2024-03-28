import { BrowserRouter, Route, Routes } from "react-router-dom";
import { allRoutes } from "./index";

const AppRoutes = () => {
  return (
    <BrowserRouter basename={"/admin"}>
      <div className="bg-light has-right-panel ">
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
