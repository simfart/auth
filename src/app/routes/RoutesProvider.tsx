import { HomePage } from "pages/home";
import { ErrorPage } from "shared/ui";
import { Route, Router, Routes, createBrowserRouter } from "react-router-dom";
import { SignInPage } from "pages/sign-in";
import { FC } from "react";
import { RequireAuth } from "shared/router";

export const RoutesProvider: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<SignInPage />} />
    </Routes>
  );
};
