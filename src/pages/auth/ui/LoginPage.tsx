import { FC } from "react";
import AuthForm from "./auth-form/AuthForm";

export const LoginPage: FC = () => {
  return (
    <div className="authContainer">
      <AuthForm
        mode="login"
        title="Sign in"
        buttonText="Login"
        linkUrl="/login"
        linkText="Sign in"
      />
    </div>
  );
};
