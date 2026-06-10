import LoginPage from "../../assets/Login-Page-Logo.png";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
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
            <div>
              <h4
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </h4>
              <h4>Register</h4>
            </div>

            <p>Create Account</p>

            <span>Join HaqDar to access personalized benefits.</span>

            <label>Full Name</label>
            <input type="email" placeholder="Enter Your Full Name" />

            <label>Email Address</label>
            <input type="email" placeholder="name@example.com" />

            <label>Password</label>
            <input type="password" placeholder="Minimum 8 characters" />

            <div className="check-terms">
              <input type="checkbox" id="terms" />

              <label htmlFor="terms">
                I agree to the <a href="/">Terms and Conditions</a> and{" "}
                <a href="/">Privacy Policy</a>.
              </label>
            </div>

            <button>Create Account</button>
            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <button className="google-btn">
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
