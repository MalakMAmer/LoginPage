import { useForm } from "react-hook-form";
import "./Login.css";
import "./RTL.css";
import book from "./assets/book.png";
import google from "./assets/googleIcon.svg";

function SignUpRTL() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Sign Up Data:", data);
  };

  return (
    <div id="wholePageWrapper" dir="rtl"> {/* RTL added here */}
      <div id="contentWrapper">
        
        <div id="logoImg">
          <img src={book} alt="logo" />
        </div>

        <h1>إنشاء حساب LMS الخاص بك</h1> {/* Example Arabic header */}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* Username */}
          <div className="formGroup">
            <label htmlFor="username" id="usernameLabel">
              اسم المستخدم
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
                  value: /^[a-zA-Z0-9._]+$/,
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
              البريد الإلكتروني
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
              كلمة المرور
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

          {/* Confirm Password */}
          <div className="formGroup">
            <label htmlFor="confirmPassword" id="confirmPasswordLabel">
              تأكيد كلمة المرور
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

          <button type="submit">تسجيل</button>
        </form>

        <div id="orWrapper">
          <div className="line"></div>
          <p>أو</p>
          <div className="line"></div>
        </div>

        <button id="signWithGoogleBtn" type="button">
          <img src={google} alt="sign up with google" />
          المتابعة باستخدام Google
        </button>

        <div className="switchSignIn-Up">
          <p>هل لديك حساب بالفعل؟</p>
          <a href="#">تسجيل الدخول</a>
        </div>
      </div>
    </div>
  );
}

export default SignUpRTL;
