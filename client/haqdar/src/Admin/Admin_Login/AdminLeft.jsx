import {
  Building2,
  ShieldCheck,
  Database,
  Cpu,
  Activity,
} from "lucide-react";

import "./AdminLeftPanel.css";

export default function LeftPanel() {
  return (
    <section className="left-panel">

      {/* Background Effects */}

      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

      {/* Content */}

      <div className="left-content">

        <div className="left-logo">

          <div className="left-logo-icon">
            <Building2 size={50} strokeWidth={2.2} />
          </div>

        </div>

        <p className="admin-tag">HaqDar Admin</p>

        <h1>
          Secure Government
          <br />
          Administration Portal
        </h1>

        <p className="left-desc">
          Manage government schemes, monitor system health,
          review citizen feedback and securely administer the
          HaqDar platform from one centralized dashboard.
        </p>

        {/* Status Card */}

        <div className="status-card">

          <div className="status-header">

            <Activity size={18} />

            <span>System Status</span>

          </div>

          <div className="status-row">

            <div className="status-item">

              <ShieldCheck size={20} />

              <div>
                <h4>Security</h4>
                <small>Protected</small>
              </div>

            </div>

            <div className="green-dot"></div>

          </div>

          <div className="status-row">

            <div className="status-item">

              <Database size={20} />

              <div>
                <h4>Database</h4>
                <small>Connected</small>
              </div>

            </div>

            <div className="green-dot"></div>

          </div>

          <div className="status-row">

            <div className="status-item">

              <Cpu size={20} />

              <div>
                <h4>AI Services</h4>
                <small>Online</small>
              </div>

            </div>

            <div className="green-dot"></div>

          </div>

        </div>

      </div>

    </section>
  );
}