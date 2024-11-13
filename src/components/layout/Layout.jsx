import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ButtonAppBar from "../appBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <ButtonAppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Outlet />
    </div>
  );
};
