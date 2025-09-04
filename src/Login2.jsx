import { useForm } from "react-hook-form";
import "./Login.css";
import book from "./assets/book.png";
import google from "./assets/googleIcon.svg";

function Login2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
        <div id="wholePageWrapper">
        <div id="contentWrapper">
            <div id="logoImg">
                <img src={book} alt="logo" /> 
            </div>
            <h1>Sign in to LMS</h1>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* email or username */}
            <div className="formGroup">
                    <label htmlFor="emailOrUsername" id="emailLabel">Email or Username</label>
                    <input
                        id="emailOrUsername"
                        type="text"
                        {...register("emailOrUsername", {
                        required: "Email or Username is required",
                        minLength: {
                            value: 8,
                            message: "Must be at least 8 characters",
                        },
                        validate: (value) => {
                            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                            const usernameRegex = /^[a-zA-Z0-9._]+$/; // only letters, numbers, dots, underscore
                            if (value.includes("@")) {
                            return emailRegex.test(value) || "Enter a valid email address";
                            } else {
                            return usernameRegex.test(value) || "Enter a valid username";
                            }
                        },
                        })}
                    />
                    {errors.emailOrUsername && (
                        <p className="error">{errors.emailOrUsername.message}</p>
                    )}
            </div>

            {/* Password */}
            <div className="formGroup">
                    <div className="formGroup">
                        <label htmlFor="password" id="passwordLabel">Password</label>
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
                                    message: "must contain uppercase and numbers",
                                }
                            })}
                        />
                    </div>
                    {errors.password && <p className="error">{errors.password.message}</p>}
            </div>

            <button type="submit">Sign in</button>
            </form>

            {/* الحاجات الي كنت شيلتها */}
            <div id="orWrapper">
                <div className="line"></div>
                <p>or</p>
                <div className="line"></div>
            </div>
            <button id="signWithGoogleBtn" type="button">
                <img src={google} alt="sign in with google" />
                Continue with Google
            </button>              
            <div className="switchSignIn-Up">
            <p>New to LMS?</p> 
            <a href="#">Create an account</a>
            </div>
        </div>
        </div>
        
    </>
    
  );
}

export default Login2;
