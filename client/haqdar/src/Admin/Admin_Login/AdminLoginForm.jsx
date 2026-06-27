import { useState } from "react";
import {
  ShieldCheck,
  User,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import "./AdminLoginForm.css";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    AdminIdr: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Login API Here
  };

  return (
    <section className="login-panel">
      <div className="login-card">

        <div className="welcome-badge">
          <ShieldCheck size={18} />
          <span>Secure Admin Access</span>
        </div>

        <h3>Welcome Back</h3>

        <h1>Sign in to Admin Panel</h1>

        <p>
          Enter your administrator credentials to access
          the secure HaqDar dashboard.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Admin Identifier</label>

            <div className="input-box">
              <User size={18} />

              <input
                type="text"
                name="username"
                placeholder="Enter Admin Id"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="input-group">

            <label>Password</label>

            <div className="input-box">

              <Lock size={18} />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

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

            <button
              type="button"
              className="forgot-btn"
            >
              Forgot Password?
            </button>

          </div>

          <button className="login-btn">
            Sign In Securely
          </button>

        </form>

        <div className="security-box">

          <ShieldCheck size={22} />

          <div>

            <h4>Security Notice</h4>

            <p>
              This portal is restricted to authorized
              government administrators only.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}