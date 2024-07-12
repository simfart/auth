import { FC } from "react";
import AuthForm from "./auth-form/AuthForm";

export const RegisterPage: FC = () => {
  return (
    <div className="authContainer">
      <AuthForm
        mode="register"
        title="Create a new account"
        buttonText="Register"
        linkUrl="/sign-in"
        linkText="Sign in"
      />
    </div>
  );
};
