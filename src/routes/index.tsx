import { Suspense, lazy } from "react";
import Appointments from "../pages/dashboards/Appointments";
import BusinessInfo from "../pages/dashboards/BusinessInfo";
import Default from "../layouts/Default";
import Vertical from "../layouts/Vertical";
import Preloader from "../pages/Preloader";

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
    path: "/dashboard/appointments",
    element: (
      <Suspense fallback={<Preloader />}>
        <Default />
        <Vertical />
        <Appointments />
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
