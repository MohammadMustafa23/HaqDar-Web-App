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
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/submit-feedBack">Contact Us</a>
        <a>FAQ</a>
      </div>

      <span className="footer-copyright">
        © 2026 HaqDar. All rights reserved.
      </span>
    </div>
  );
}
