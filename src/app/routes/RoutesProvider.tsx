// import { ErrorPage } from "shared/ui";
import { Route, Router, Routes, createBrowserRouter } from "react-router-dom";
import { RegisterPage, LoginPage } from "pages/auth";
import { FC } from "react";
import { HomePage } from "pages/home";
import { ProtectedRoute } from "shared/ui/ProtectedRoute";
// import { RequireAuth } from "shared/router";

export const RoutesProvider: FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<ProtectedRoute children={<HomePage />} />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};
