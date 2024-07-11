import { FC } from "react";
import AuthForm from "./AuthForm";
import { verifyEmailFn, verifyTokenlFn } from "shared/api/auth/authApi";

export const LoginPage: FC = () => {
  return (
    <div className="authContainer">
      <AuthForm
        mode="login"
        title="Create a new account"
        buttonText="Login"
        linkUrl="/sign-in"
        linkText="Sign in"
      />
    </div>
  );
};
