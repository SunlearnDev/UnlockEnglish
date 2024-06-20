import React, { lazy, Suspense } from 'react';
import {  Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const VerifyEmail = lazy(() => import('@/pages/VerifyEmail'));
const Home = lazy(() => import('@/pages/Home'));

export const routes = [
  {
    name: "Login",
    path: "/login",
    element: <Login />
  },
  {
    name: "Register",
    path: "/register",
    element: <Register />
  },
  {
    name: "VerifyEmail",
    path: "/verifyemail",
    element: <VerifyEmail/>
  },
  {
    name: "Home",
    path: "/",
    element: <Home />
  }
];

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRoutes;
