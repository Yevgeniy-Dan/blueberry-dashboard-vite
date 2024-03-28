import { Suspense, lazy } from "react";
import Appoitments from "../pages/dashboards/Appoitments";
import BusinessInfo from "../pages/dashboards/BusinessInfo";
import Default from "../layouts/Default";
import Vertical from "../layouts/Vertical";
import Preloader from "../pages/Preloader";

const SignIn = lazy(() => import("../pages/auth/SignIn"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const ForgetPassword = lazy(() => import("../pages/auth/ForgetPassword"));

// auth
const authRoutes = [
  {
    path: "/account/sign-in",
    element: (
      <Suspense fallback={<Preloader />}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: "/account/sign-up",
    element: (
      <Suspense fallback={<Preloader />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/account/forget-password",
    element: (
      <Suspense fallback={<Preloader />}>
        <ForgetPassword />
      </Suspense>
    ),
  },
];

const dashboardRoutes = [
  {
    path: "/dashboard/appoitments",
    element: (
      <Suspense fallback={<Preloader />}>
        <Default />
        <Vertical />
        <Appoitments />
      </Suspense>
    ),
  },
  {
    path: "/dashboard/business-info",
    element: (
      <Suspense fallback={<Preloader />}>
        <Default />
        <Vertical />
        <BusinessInfo />
      </Suspense>
    ),
  },
];

const allRoutes = [...authRoutes, ...dashboardRoutes];

export { allRoutes };
