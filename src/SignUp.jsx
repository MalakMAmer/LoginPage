import { useForm } from "react-hook-form";
import "./Login.css";
import book from "./assets/book.png";
import google from "./assets/googleIcon.svg";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Sign Up Data:", data);
  };

  return (
    <div id="wholePageWrapper">
      <div id="contentWrapper">
        
        <div id="logoImg">
          <img src={book} alt="logo" />
        </div>

        <h1>Create your account</h1>

        
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* Username */}
          <div className="formGroup">
            <label htmlFor="username" id="usernameLabel">
              Username
            </label>
            <input
              id="username"
              type="text"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 8,
                  message: "Username must be at least 8 characters",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._]+$/, // only letters, numbers, dots, underscore
                  message: "Username can only contain letters, numbers, . and _",
                },
              })}
            />
            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="formGroup">
            <label htmlFor="email" id="emailLabel">
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="formGroup">
            <label htmlFor="password" id="passwordLabel">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).+$/,
                  message: "Must contain an uppercase letter and a number",
                },
              })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          <div className="formGroup">
            <label htmlFor="confirmPassword" id="confirmPasswordLabel">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value, { password }) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button type="submit">Sign up</button>
        </form>

        <div id="orWrapper">
          <div className="line"></div>
          <p>or</p>
          <div className="line"></div>
        </div>

        <button id="signWithGoogleBtn" type="button">
          <img src={google} alt="sign up with google" />
          Continue with Google
        </button>

        <div className="switchSignIn-Up">
          <p>Already have an account?</p>
          <a href="#">Sign in</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
