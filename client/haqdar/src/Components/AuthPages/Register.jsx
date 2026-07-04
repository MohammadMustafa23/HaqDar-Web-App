import LoginPage from "../../assets/Login-Page-Logo.png";
import "./Register.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RegisterUser } from "../../Services/auttantication.service";
import AppSwal from "../Common/AppSwal";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginUser } from "../../Services/auttantication.service";
import PageLoader from "../Common/PageLoader";
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
        setLoading(true);
        const response = await GoogleLoginUser(tokenResponse.access_token);
        await AppSwal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: response.data.message,
          timer: 1800,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          navigate("/home-page"); // or home page
          setTimeout(() => {
            window.location.reload();
          }, 50);
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
    try {
      const Response = await RegisterUser(formData);
      await AppSwal.fire({
        icon: "success",
        title: "Registration Sucess!",
        text: Response.data.message,
        timer: 1800,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      AppSwal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.response?.data?.message || "Something went wrong.",
        confirmButtonText: "Try Again",
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
    <>
      {loading && <PageLoader text="Creating your account..." />}

      <div className="hd-register-page">
        <div className="hd-register-container">
          <div className="hd-register-left">
            <h1>Your Gateway to Government Benefits.</h1>

            <p>
              Empowering citizens through transparent, accessible, and reliable
              digital services. Sign in to track your applications and discover
              schemes tailored for you.
            </p>

            <img src={LoginPage} alt="Government Portal" />

            <span>Trusted by 2M+ Citizens Nationwide</span>
          </div>

          <div className="hd-register-right">
            <div className="hd-register-card">
              <div className="hd-register-tabs">
                <NavLink
                  to="/login"
                  replace
                  className={({ isActive }) =>
                    isActive
                      ? "hd-register-tab hd-register-tab-active"
                      : "hd-register-tab"
                  }
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  replace
                  className={({ isActive }) =>
                    isActive
                      ? "hd-register-tab hd-register-tab-active"
                      : "hd-register-tab"
                  }
                >
                  Register
                </NavLink>
              </div>

              <p className="hd-register-title">Create Account</p>

              <span className="hd-register-subtitle">
                Join HaqDar to access personalized benefits.
              </span>

              {/* Full Name */}
              <div className="hd-register-field">
                <label className="hd-register-label">Full Name</label>

                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                  className={`hd-register-input ${
                    errors.userName ? "hd-register-input-error" : ""
                  }`}
                />

                <p className="hd-register-error">
                  {errors.userName || "\u00A0"}
                </p>
              </div>

              {/* Email */}
              <div className="hd-register-field">
                <label className="hd-register-label">Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`hd-register-input ${
                    errors.email ? "hd-register-input-error" : ""
                  }`}
                />

                <p className="hd-register-error">{errors.email || "\u00A0"}</p>
              </div>

              {/* Password */}
              <div className="hd-register-field">
                <label className="hd-register-label">Password</label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`hd-register-input ${
                    errors.password ? "hd-register-input-error" : ""
                  }`}
                />

                <p className="hd-register-error">
                  {errors.password || "\u00A0"}
                </p>
              </div>

              <button
                className="hd-register-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                Create Account
              </button>

              <div className="hd-register-divider">
                <span>OR CONTINUE WITH</span>
              </div>

              <button className="hd-register-google-btn" onClick={googleLogin}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Google"
                />
                Continue with Google
              </button>

              <p className="hd-register-secure-text">
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
