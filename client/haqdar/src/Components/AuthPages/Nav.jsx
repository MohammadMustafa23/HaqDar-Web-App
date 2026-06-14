import "./Nav.css";

export default function NavBar() {
  return (
    <div className="auth-nav-container">
      <div className="auth-nav-links">
        <h2 className="auth-nav-logo">HaqDar</h2>

        <a href="#">Schemes</a>
        <a href="#">How it Works</a>
        <a href="#">FAQ</a>
      </div>

      <h2 className="auth-nav-signup">Sign Up</h2>
    </div>
  );
}