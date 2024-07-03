import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../authForm.module.css";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "./hooks/useAuth";
// import {
//   logInWithEmailAndPassword,
//   registerWithEmailAndPassword,
// } from "./utils/firebase";
// import { registerUser } from "./utils/backendlessBase";
import { loginUserFn, signUpUserFn } from "shared/api/auth/authApi";

interface AuthFormProps {
  mode: "signin" | "register";
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
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // registerUser

    // handle user logIn / register
    try {
      setIsSubmitting(true);
      if (mode === "signin") {
        loginUserFn({ login: formState.email, password: formState.password });
      } else {
        signUpUserFn({
          name: formState.name,
          email: formState.email,
          password: formState.password,
        });
      }
      // if (user !== null) {
      //   const userData = {
      //     userId: user?.uid || "",
      //     name: user?.displayName || "",
      //     email: user?.email || "",
      //   };

      //   // login(userData);
      //   navigate("/");
      // }
      // setIsSubmitting(false);
    } catch (err) {
      if (err instanceof Error) {
        // Handle authentication-specific errors gracefully
        console.error(err.message);
        alert(err.message);
      } else {
        console.error("Unexpected error", err);
      }
      return null; // Return null in case of error
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1 className={styles.authTitle}>{title}</h1>
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

      <Link to={linkUrl} className={styles.iconLink}>
        {linkText}
      </Link>
    </form>
  );
};

export default AuthForm;
