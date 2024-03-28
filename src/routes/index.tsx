import { Suspense, lazy } from "react";
import Appoitments from "../pages/dashboards/Appoitments";
import BusinessInfo from "../pages/dashboards/BusinessInfo";

const SignIn = lazy(() => import("../pages/auth/SignIn"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const ForgetPassword = lazy(() => import("../pages/auth/ForgetPassword"));

// auth
const authRoutes = [
  {
    path: "/account/sign-in",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: "/account/sign-up",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/account/forget-password",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ForgetPassword />
      </Suspense>
    ),
  },
];

const dashboardRoutes = [
  {
    path: "/dashboard/appoitments",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Appoitments />
      </Suspense>
    ),
  },
  {
    path: "/dashboard/business-info",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <BusinessInfo />
      </Suspense>
    ),
  },
];

const allRoutes = [...authRoutes, ...dashboardRoutes];

export { allRoutes };
