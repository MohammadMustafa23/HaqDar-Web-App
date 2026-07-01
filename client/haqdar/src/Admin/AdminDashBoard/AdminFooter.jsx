import "./AdminDashComp.css";

export default function AdminFooter() {
  return (
    <footer className="aft-footer">
      <div className="aft-container">
        {/* Column 1 */}

        <div className="aft-column">
          <div className="aft-logo">
            <div className="home-nav-logo-box">H</div>
            <h1 className="home-nav-logo-text">HaqDar</h1>
          </div>

          <p className="aft-description">
            The official administrative portal for the HaqDar Digital Government
            Initiative. Securely manage schemes, users, and citizen services.
          </p>
        </div>

        {/* Column 2 */}

        <div className="aft-column">
          <h4 className="aft-heading">Legal</h4>

          <a href="#" className="aft-link">
            Privacy Policy
          </a>

          <a href="#" className="aft-link">
            Terms & Conditions
          </a>

          <a href="#" className="aft-link">
            Cookie Policy
          </a>
        </div>

        {/* Column 3 */}

        <div className="aft-column">
          <h4 className="aft-heading">Security</h4>

          <a href="#" className="aft-link">
            Admin Protocol
          </a>

          <a href="#" className="aft-link">
            Access Control
          </a>

          <a href="#" className="aft-link">
            Data Protection
          </a>
        </div>

        {/* Column 4 */}

        <div className="aft-column">
          <h4 className="aft-heading">Support</h4>

          <a href="#" className="aft-link">
            Help Center
          </a>

          <a href="#" className="aft-link">
            Contact
          </a>

          <a href="#" className="aft-link">
            Documentation
          </a>
        </div>
      </div>

      <div className="aft-bottom">
        <p>© 2026 HaqDar Admin Portal. All Rights Reserved.</p>

        <span>Version 1.0.0</span>
      </div>
    </footer>
  );
}
