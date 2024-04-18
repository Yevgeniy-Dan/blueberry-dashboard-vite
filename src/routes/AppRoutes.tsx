import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { allRoutes } from "./index";
import AdminWrapper from "../layouts/AdminWrapper";
import { APPOINTMENTS } from "./constants";
import { isUserAuthenticated } from "../heplers/authUtils";
import { lazy } from "react";
import { useQuery } from "@tanstack/react-query";

const AuthLayout = lazy(() => import("../layouts/Auth"));

const AppRoutes = () => {
  const { data: isAuthenticated } = useQuery({
    queryKey: ["isAuthenticated"],
    queryFn: () => isUserAuthenticated(),
  });

  const getLayout = () => {
    if (!isAuthenticated) return AuthLayout;

    const layoutCls = AdminWrapper;

    return layoutCls;
  };
  const Layout = getLayout();

  return (
    <BrowserRouter basename={"/admin"}>
      <Layout>
        <Routes>
          {allRoutes.map((route, index) => (
            <Route key={index} element={route.element} path={route.path} />
          ))}
          <Route path="/" element={<Navigate replace to={APPOINTMENTS} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
