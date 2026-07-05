import LoginPage from "../../assets/Login-Page-Logo.png";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import AppSwal from "../Common/AppSwal";
import { LoginUser } from "../../Services/auttantication.service";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import {
  GoogleLoginUser,
  getCurrentUser,
} from "../../Services/auttantication.service";
import PageLoader from "../Common/PageLoader";

export default function Login({ setProfileData }) {
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
      try {
        setLoading(true);
        const response = await GoogleLoginUser(tokenResponse.access_token);
        AppSwal.fire({
          icon: "success",
          title: "Login Successful!",
          text: response.data.message,
          timer: 1800,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then(async () => {
          const userData = await getCurrentUser();
          if (userData?.success) {
            setProfileData(userData);
          }
          navigate("/home-page"); // or home page
        });
      } catch (error) {
        AppSwal.fire({
          icon: "error",
          title: "Login Failed",
          text:
            error.response?.data?.message ||
            "Unable to login. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Login failed. Please try again.",
      );
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
    try {
      const response = await LoginUser(formData);
      await AppSwal.fire({
        icon: "success",
        title: "Welcome to HaqDar!",
        text: response.data.message,
        timer: 1800,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(async () => {
        const userData = await getCurrentUser();
        if (userData?.success) {
          setProfileData(userData);
        }
        navigate("/home-page"); // or home page
      });

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      AppSwal.fire({
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
    <>
      {loading && <PageLoader text="Signing you in..." />}

      <div className="hd-login-page">
        <div className="hd-login-container">
          <div className="hd-login-left">
            <h1>Your Gateway to Government Benefits.</h1>

            <p>
              Empowering citizens through transparent, accessible, and reliable
              digital services. Sign in to track your applications and discover
              schemes tailored for you.
            </p>

            <img src={LoginPage} alt="Government Portal" />

            <span>Trusted by 2M+ Citizens Nationwide</span>
          </div>

          <div className="hd-login-right">
            <div className="hd-login-card">
              <div className="hd-login-tabs">
                <NavLink
                  to="/login"
                  replace
                  className={({ isActive }) =>
                    isActive
                      ? "hd-login-tab hd-login-tab-active"
                      : "hd-login-tab"
                  }
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  replace
                  className={({ isActive }) =>
                    isActive
                      ? "hd-login-tab hd-login-tab-active"
                      : "hd-login-tab"
                  }
                >
                  Register
                </NavLink>
              </div>

              <p className="hd-login-title">Welcome Back</p>

              <span className="hd-login-subtitle">
                Sign in to your account to continue.
              </span>

              {/* Email */}

              <div className="hd-login-field">
                <label className="hd-login-label">Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={
                    errors.email
                      ? "hd-login-input hd-login-input-error"
                      : "hd-login-input"
                  }
                />

                {errors.email && (
                  <p className="hd-login-error">{errors.email}</p>
                )}
              </div>

              {/* Password */}

              <div className="hd-login-field">
                <label className="hd-login-label">Password</label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={
                    errors.password
                      ? "hd-login-input hd-login-input-error"
                      : "hd-login-input"
                  }
                />

                {errors.password && (
                  <p className="hd-login-error">{errors.password}</p>
                )}
              </div>

              <button
                className="hd-login-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                Sign In
              </button>

              <div className="hd-login-divider">
                <span>OR CONTINUE WITH</span>
              </div>

              <button className="hd-login-google-btn" onClick={googleLogin}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Google"
                />
                Continue with Google
              </button>

              <p className="hd-login-secure-text">
                Your information is securely protected and used only for
                eligibility matching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
