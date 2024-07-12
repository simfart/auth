import { useState } from "react";
import { Link } from "react-router-dom";
import { signUpUserFn } from "shared/api/auth/authApi";
import { useLogin } from "../api/hooks/useLogin";
import "./AuthForm.scss";

interface AuthFormProps {
  mode: "login" | "register";
  title: string;
  buttonText: string;
  linkUrl: string;
  linkText: string;
}

const initialFormState = {
  email: "",
  password: "",
  name: "",
};

const AuthForm = ({
  mode,
  title,
  buttonText,
  linkUrl,
  linkText,
}: AuthFormProps) => {
  const [formState, setFormState] = useState(initialFormState);
  const { mutate: login } = useLogin();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      if (mode === "login") {
        login({ login: formState.email, password: formState.password });
      } else {
        signUpUserFn({
          name: formState.name,
          email: formState.email,
          password: formState.password,
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
        alert(err.message);
      } else {
        console.error("Unexpected error", err);
      }
      return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-container">
      <h1 className="auth-tile">{title}</h1>
      <input
        type="email"
        placeholder="Email"
        value={formState.email}
        onChange={(event) =>
          setFormState((prevState) => ({
            ...prevState,
            email: event.target.value,
          }))
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={formState.password}
        onChange={(event) =>
          setFormState((prevState) => ({
            ...prevState,
            password: event.target.value,
          }))
        }
      />
      {mode === "register" && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={formState.name}
            onChange={(event) =>
              setFormState((prevState) => ({
                ...prevState,
                name: event.target.value,
              }))
            }
          />
        </>
      )}
      <button type="submit" className="ctaLink">
        {buttonText}
      </button>

      <Link to={linkUrl} className="auth-iconlink">
        {linkText}
      </Link>
    </form>
  );
};

export default AuthForm;
