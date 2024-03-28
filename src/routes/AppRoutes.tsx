import { BrowserRouter, Route, Routes } from "react-router-dom";
import { allRoutes } from "./index";

const AppRoutes = () => {
  return (
    <BrowserRouter basename={"/admin"}>
      <Routes>
        {allRoutes.map((route, index) => (
          <Route key={index} element={route.element} path={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
