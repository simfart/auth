import { FC } from "react";
import { AuthForm } from "./auth-form";

export const LoginPage: FC = () => {
  return (
    <div className="authContainer">
      <AuthForm
        mode="login"
        title="Sign in"
        buttonText="Login"
        linkUrl="/register"
        linkText="Sign up"
      />
    </div>
  );
};
