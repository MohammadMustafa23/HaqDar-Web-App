import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-head">
      <div className="footer-about">
        <h3 className="footer-logo">HaqDar</h3>
        <span>
          Helping citizens discover government schemes and benefits with ease.
        </span>
      </div>

      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
      </div>

      <span className="footer-copyright">
        © 2026 HaqDar. All rights reserved.
      </span>
    </div>
  );
}
