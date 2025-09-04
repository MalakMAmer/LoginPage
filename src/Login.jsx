import { useForm } from "react-hook-form";
import "./Login.css";
import book from "./assets/book.png";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
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
                    // هنا خليت الايرور منفصل لليوزر عن الايميل
                    // هسيب الكود تحت لو حبيتوا تخلوها الاتنين سوا
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

        <div className="switchSignIn-Up">
          <p>New to GitHub?</p> 
          <a href="#">Create an account</a>
        </div>
      </div>

      {/* <footer className="login-footer">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#">Contact GitHub</a>
      </footer> */}
      {/* موجودة في الويبسات بتاعة جيت هاب بس شكلها وحش فشيلتها حاليا */}

      {/* في كام حاجة تانية موجودة في الويبسايت وماعرفتش اضيفها*/}
      {/* continue with google */}
      {/* sign in with a passkey */}
      {/* forgot password */}

      {/* بتاعة الايرور */}
      {/*           <input
                id="emailOrUsername"
                type="text"
                {...register("emailOrUsername", {
                required: "Email or Username is required",
                minLength: {
                    value: 3,
                    message: "Must be at least 3 characters",
                },
                validate: (value) => {
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    const usernameRegex = /^[a-zA-Z0-9._-]+$/; // only letters, numbers, dots, underscores, hyphens
                    if (!emailRegex.test(value) && !usernameRegex.test(value)) {
                    return "Enter a valid email or username";
                    }
                    return true;
                },
                })}
            />
            {errors.emailOrUsername && (
                <p className="text-danger">{errors.emailOrUsername.message}</p>
            )} */}
    </div>
  );
}

export default Login;
