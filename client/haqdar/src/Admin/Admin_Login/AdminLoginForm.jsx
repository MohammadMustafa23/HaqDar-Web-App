import { useState } from "react";
import { ShieldCheck, User, Lock } from "lucide-react";
import { adminLogin } from "../../Services/admin.service.js";
import Appswal from "../../Components/Common/AppSwal.js";
import { useNavigate } from "react-router-dom";
import "./AdminLoginForm.css";
import PageLoader from "../../Components/Common/PageLoader.jsx";
export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
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

    // Remember Me validation (only if required)
    if (!formData.remember) {
      newErrors.remember = "Please check 'Remember Me'";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await adminLogin(formData);
      console.log(response);

      setLoading(false);
      await Appswal.fire({
        icon: "success",
        title: "Welcome Back!",
        text: response.data.message,
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
      });

      navigate("/admin-dashboard", { replace: true });
    } catch (err) {
      console.log("ERROR", err);

      Appswal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: err.response?.data?.message || "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <PageLoader text="Signing you in..." />}
      <section className="login-panel">
        <div className="login-card">
          <div className="welcome-badge">
            <ShieldCheck size={18} />
            <span>Secure Admin Access</span>
          </div>

          <h3>Welcome Back</h3>

          <h1>Sign in to Admin Panel</h1>

          <p>
            Enter your administrator credentials to access the secure HaqDar
            dashboard.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}

            <div className="input-group">
              <label>Admin Email</label>

              <div className="input-box">
                <User size={18} />

                <input
                  className={errors.email ? "input error" : "input"}
                  type="email"
                  name="email"
                  placeholder="Enter Admin Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            {/* Password */}

            <div className="input-group">
              <label>Password</label>

              <div className="input-box">
                <Lock size={18} />

                <input
                  className={errors.password ? "input error" : "input"}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            {/* Options */}

            <div className="login-options">
              <label className="remember">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Remember Device
              </label>
            </div>

            {/* Submit */}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Signing In..." : "Sign In Securely"}
            </button>
          </form>

          <div className="security-box">
            <ShieldCheck size={22} />

            <div>
              <h4>Security Notice</h4>

              <p>
                This portal is restricted to authorized government
                administrators only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
