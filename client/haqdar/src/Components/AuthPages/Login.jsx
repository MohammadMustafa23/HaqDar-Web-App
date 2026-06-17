import LoginPage from "../../assets/Login-Page-Logo.png";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { LoginUser } from "../../Services/auttantication.service";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginUser } from "../../Services/auttantication.service";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

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
  async function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 20000));
    try {
      const response = await LoginUser(formData);

      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: response.data.message,
        confirmButtonText: "Continue",
      }).then(() => {
        navigate("/home-page"); // or home page
      });

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Invalid email or password",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  }
  function validate() {
    const newErrors = {};

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

            <p>Welcome Back</p>

            <span>Sign in to your account to continue.</span>

            <div className="input-group">
              <label>Email Address</label>

              <input
                className={errors.email ? "input error" : "input"}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />

              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

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

            <button
              className="sign-in"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <div className="loading-wrapper">
                  <div className="btn-spinner"></div>
                  <span className="loading-text">Signing In...</span>
                </div>
              ) : (
                "Sign In"
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
