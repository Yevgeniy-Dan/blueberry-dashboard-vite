import { Suspense, lazy } from "react";
import Appointments from "../pages/dashboards/Appointments";
import BusinessInfo from "../pages/dashboards/BusinessInfo";

import Preloader from "../pages/Preloader";
import { APPOINTMENTS, BUSINESS_INFO } from "./constants";

const SignIn = lazy(() => import("../pages/auth/SignIn"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const ForgetPassword = lazy(() => import("../pages/auth/ForgetPassword"));
const Logout = lazy(() => import("../pages/auth/Logout"));

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
  {
    path: "/account/logout",
    element: (
      <Suspense fallback={<Preloader />}>
        <Logout />
      </Suspense>
    ),
  },
];

const dashboardRoutes = [
  {
    path: APPOINTMENTS,
    element: (
      <Suspense fallback={<Preloader />}>
        <Appointments />
      </Suspense>
    ),
  },
  {
    path: BUSINESS_INFO,
    element: (
      <Suspense fallback={<Preloader />}>
        <BusinessInfo />
      </Suspense>
    ),
  },
];

const allRoutes = [...authRoutes, ...dashboardRoutes];

export { allRoutes };
