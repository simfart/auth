import { FC } from "react";
import AuthForm from "./AuthForm";

export const SignInPage: FC = () => {
  return (
    <div className="authContainer">
      <AuthForm
        mode="signin"
        title="Create a new account"
        buttonText="Login"
        linkUrl="/sign-in"
        linkText="Sign in"
      />
    </div>
  );
};
