import LoginPage from "../../assets/Login-Page-Logo.png";
import "./Login.css";
import { useNavigate } from 'react-router-dom'

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
              <h4>Login</h4>
              <h4 onClick={()=>{navigate('/register')}} >Register</h4>
            </div>

            <p>Welcome Back</p>

            <span>Sign in to your account to continue.</span>

            <label>Email Address</label>
            <input type="email" placeholder="name@example.com" />

            <label>Password</label>
            <input type="password" placeholder="••••••••" />

            <button>Sign In</button>
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
