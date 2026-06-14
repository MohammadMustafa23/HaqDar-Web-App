import LoginPage from "../../assets/Login-Page-Logo.png";
import "./Register.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RegisterUser } from "../../Services/Auth.User";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginUser } from "../../Services/Auth.User";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google Success");
      console.log(tokenResponse);

      try {
        const response = await GoogleLoginUser(tokenResponse.access_token);

        console.log("Backend Response");
        console.log(response.data);

        localStorage.setItem("token", response.data.token);

        navigate("/home-page");
      } catch (error) {
        console.log("API Error");
        console.log(error);
      }
    },

    onError: (error) => {
      console.log("Login Failed");
      console.log(error);
    },
  });
  function validate() {
    const newErrors = {};
    // userName
    if (!formData.userName.trim()) {
      newErrors.userName = "userName is required";
    } else if (formData.userName.length < 3) {
      newErrors.userName = "userName must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;
    setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    try {
      const Response = await RegisterUser(formData);
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: Response.data.message,
        confirmButtonText: "Continue",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }

    setFormData({
      userName: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="login-head">
      <div className="center-part">
        <div className="left-side">
          <h1>Your Gateway to Government Benefits.</h1>

          <p>
            Empowering citizens through transparent, accessible, and reliable
            digital services. Sign in to track your applications and discover
            schemes tailored for you.
          </p>

          <img src={LoginPage} alt="Government Portal" />

          <span>Trusted by 2M+ Citizens Nationwide</span>
        </div>

        <div className="right-side">
          <div className="center-right">
            <div className="auth-tabs">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "tab active" : "tab")}
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "tab active" : "tab")}
              >
                Register
              </NavLink>
            </div>

            <p>Create Account</p>

            <span>Join HaqDar to access personalized benefits.</span>

            <div className="input-group">
              <label>Full Name</label>

              <input
                className={errors.userName ? "input error" : "input"}
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter Your Full userName"
              />

              {errors.userName && (
                <p className="error-message">{errors.userName}</p>
              )}
            </div>

            <div className="input-group">
              <label>Email Address</label>

              <input
                className={errors.email ? "input error" : "input"}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="userName@example.com"
              />

              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                className={errors.password ? "input error" : "input"}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />

              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <button
              className="sign-in"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <div className="loading-wrapper">
                  <span className="btn-spinner"></span>
                  <span>Creating...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </button>
            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <button className="google-btn" onClick={() => googleLogin()}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
              />
              Continue with Google
            </button>

            <p className="secure-text">
              Your information is securely protected and used only for
              eligibility matching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
