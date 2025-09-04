import { useForm } from "react-hook-form";
import "./Login.css";
import "./RTL.css";
import book from "./assets/book.png";
import google from "./assets/googleIcon.svg";

function LoginRTL() {
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
      <div id="wholePageWrapper" dir="rtl"> {/* RTL added here */}
        <div id="contentWrapper">
          <div id="logoImg">
            <img src={book} alt="logo" />
          </div>
          <h1>تسجيل الدخول إلى LMS</h1> {/* Arabic title example */}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* email or username */}
            <div className="formGroup">
              <label htmlFor="emailOrUsername" id="emailLabel">
                البريد الإلكتروني أو اسم المستخدم
              </label>
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
                    const emailRegex =
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    const usernameRegex = /^[a-zA-Z0-9._]+$/; // only letters, numbers, dots, underscore
                    if (value.includes("@")) {
                      return (
                        emailRegex.test(value) || "Enter a valid email address"
                      );
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
                    message: "must contain uppercase and numbers",
                  },
                })}
              />
              {errors.password && <p className="error">{errors.password.message}</p>}
            </div>

            <button type="submit">تسجيل الدخول</button>
          </form>

          
          <div id="orWrapper">
            <div className="line"></div>
            <p>أو</p>
            <div className="line"></div>
          </div>
          <button id="signWithGoogleBtn" type="button">
            <img src={google} alt="sign in with google" />
            المتابعة باستخدام Google
          </button>
          <div className="switchSignIn-Up">
            <p>جديد على LMS؟</p>
            <a href="#">إنشاء حساب</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginRTL;
