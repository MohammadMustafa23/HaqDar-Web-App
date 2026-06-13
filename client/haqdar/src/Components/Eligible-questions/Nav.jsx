import { UserCircle2 } from "lucide-react";
import "./Eligible-question.css";

export default function Nav() {
  return (
    <nav className="navbar-01">
      <div className="logo-section">
        <div className="logo-box">H</div>
        <h1 className="logo-text">HaqDar</h1>
      </div>

      <button className="navbar-profile-btn">
        <UserCircle2 className="navbar-profile-icon" />
      </button>
    </nav>
  );
}
