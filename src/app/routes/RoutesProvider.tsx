// import { HomePage } from "pages/home";
// import { ErrorPage } from "shared/ui";
import { Route, Router, Routes, createBrowserRouter } from "react-router-dom";
import { RegisterPage, SignInPage } from "pages/sign-in";
import { FC } from "react";
// import { RequireAuth } from "shared/router";

export const RoutesProvider: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RegisterPage />
          // <RequireAuth>
          //   <HomePage />
          // </RequireAuth>
        }
      />
      <Route path="/login" element={<SignInPage />} />
    </Routes>
  );
};
