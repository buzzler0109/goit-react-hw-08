import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../appBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Outlet />
    </div>
  );
};
