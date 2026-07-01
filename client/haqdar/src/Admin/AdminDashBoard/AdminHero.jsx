import "./AdminDashComp.css";
import { useEffect, useState } from "react";
import { Clock3, ShieldCheck } from "lucide-react";

export default function AdminHero() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();

    setCurrentTime(
      now.toLocaleString("en-IN", {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    );
  }, []);

  return (
    <section className="ahr-wrapper">
      <div className="ahr-left">
        <span className="ahr-badge">Administration Portal</span>

        <h1 className="ahr-title">Welcome back, Admin</h1>

        <p className="ahr-subtitle">
          Manage government schemes, monitor platform activity, review citizen
          feedback and oversee the HaqDar platform from one centralized
          dashboard.
        </p>
      </div>

      <div className="ahr-right">
        <div className="ahr-info-card">
          <div className="ahr-label">
            <Clock3 size={15} />
            <span>Last Login</span>
          </div>

          <h4 className="ahr-time">{currentTime}</h4>

          <div className="ahr-status">
            <ShieldCheck size={16} />
            <span>System Secure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
