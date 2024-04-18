import React, { Suspense } from "react";
import Preloader from "../pages/Preloader";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Suspense fallback={<Preloader />}>{children}</Suspense>;
};

export default AuthLayout;
