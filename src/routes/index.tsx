import React, { Suspense, lazy } from "react";
import Appointments from "../pages/admin/Appointments";
import BusinessInfo from "../pages/admin/BusinessInfo";

import Preloader from "../pages/Preloader";
import {
  ALL_APPOINTMENTS,
  ANALYTICS,
  APPOINTMENTS,
  BUSINESS_INFO,
  CANCELED_APPOINTMENTS,
  CUSTOMERS,
  NOTIFICATIONS,
  ROLES,
  SERVICES,
  STAFF,
} from "./constants";
import Staff from "../pages/admin/Staff";
import StaffForm from "../pages/admin/Staff/StaffForm";
import Services from "../pages/admin/Services";
import ServiceForm from "../pages/admin/Services/ServiceForm";
import Customers from "../pages/admin/Customers";
import Roles from "../pages/admin/Roles";
import RoleForm from "../pages/admin/Roles/RoleForm";
import AddForm from "../pages/admin/Appointments/AddForm";
import Analytics from "../pages/admin/Analytics";
import AllAppointments from "../pages/admin/Appointments/All";
import CanceledAppointments from "../pages/admin/Appointments/Canceled";
import { isUserAuthenticated } from "../heplers/authUtils";
import { Navigate } from "react-router-dom";
import Notifications from "../pages/admin/AppNotifications";

export const SignIn = lazy(() => import("../pages/auth/SignIn"));
export const SignUp = lazy(() => import("../pages/auth/SignUp"));
export const ForgetPassword = lazy(
  () => import("../pages/auth/ForgetPassword")
);
export const Logout = lazy(() => import("../pages/auth/Logout"));

export const PrivateRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  if (!isUserAuthenticated()) {
    // Not logged in, redirect to signin page with the return URL
    return <Navigate to="/account/sign-in" replace />;
  }

  // Authorized, render the component
  return children;
};

export const PublicRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  if (isUserAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// auth
const authRoutes = [
  {
    path: "/account/sign-in",
    element: (
      <PublicRoute>
        <Suspense fallback={<Preloader />}>
          <SignIn />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: "/account/sign-up",
    element: (
      <PublicRoute>
        <Suspense fallback={<Preloader />}>
          <SignUp />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: "/account/forget-password",
    element: (
      <PublicRoute>
        <Suspense fallback={<Preloader />}>
          <ForgetPassword />
        </Suspense>
      </PublicRoute>
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
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <Appointments />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: ALL_APPOINTMENTS,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <AllAppointments />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: CANCELED_APPOINTMENTS,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <CanceledAppointments />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: `${APPOINTMENTS}/add`,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <AddForm />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: BUSINESS_INFO,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <BusinessInfo />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: STAFF,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <Staff />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: `${STAFF}/add`,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <StaffForm />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: `${STAFF}/add/:userId`,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <StaffForm />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: SERVICES,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <Services />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: `${SERVICES}/add`,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <ServiceForm />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: `${SERVICES}/add/:serviceId`,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <ServiceForm />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: CUSTOMERS,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <Customers />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: ROLES,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <Roles />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: `${ROLES}/add`,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <RoleForm />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: `${ROLES}/add/:roleId`,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <RoleForm />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: `${ANALYTICS}`,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <Analytics />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: `${NOTIFICATIONS}`,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Preloader />}>
          <Notifications />
        </Suspense>
      </PrivateRoute>
    ),
  },
];

const allRoutes = [...authRoutes, ...dashboardRoutes];

export { allRoutes };
