import { Suspense, lazy } from "react";
import Appointments from "../pages/dashboards/Appointments";
import BusinessInfo from "../pages/dashboards/BusinessInfo";

import Preloader from "../pages/Preloader";
import { APPOINTMENTS, BUSINESS_INFO, SERVICES, STAFF } from "./constants";
import Staff from "../pages/dashboards/Staff";
import StaffForm from "../pages/dashboards/Staff/StaffForm";
import Services from "../pages/dashboards/Services";
import ServiceForm from "../pages/dashboards/Services/ServiceForm";

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
  {
    path: STAFF,
    element: (
      <Suspense fallback={<Preloader />}>
        <Staff />
      </Suspense>
    ),
  },
  {
    path: `${STAFF}/add`,
    element: (
      <Suspense fallback={<Preloader />}>
        <StaffForm />
      </Suspense>
    ),
  },
  {
    path: `${STAFF}/add/:userId`,
    element: (
      <Suspense fallback={<Preloader />}>
        <StaffForm />
      </Suspense>
    ),
  },
  {
    path: SERVICES,
    element: (
      <Suspense fallback={<Preloader />}>
        <Services />
      </Suspense>
    ),
  },
  {
    path: `${SERVICES}/add`,
    element: (
      <Suspense fallback={<Preloader />}>
        <ServiceForm />
      </Suspense>
    ),
  },
  {
    path: `${SERVICES}/add/:serviceId`,
    element: (
      <Suspense fallback={<Preloader />}>
        <ServiceForm />
      </Suspense>
    ),
  },
];

const allRoutes = [...authRoutes, ...dashboardRoutes];

export { allRoutes };
