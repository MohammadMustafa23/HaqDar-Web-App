import "./AdminDashComp.css";
import { useState, useEffect } from "react";

export default function AdminHero() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();

    const formatted = now.toLocaleString("en-IN", {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    setCurrentTime(formatted);
  }, []);

  return (
    <section className="ahr-wrapper">

      <div className="ahr-left">

        <h1 className="ahr-title">
          Welcome back, Admin
        </h1>

        <p className="ahr-subtitle">
          Your administrative dashboard is up to date.
          Manage government schemes, monitor users,
          and review feedback with precision and clarity.
        </p>

      </div>

      <div className="ahr-right">

        <span className="ahr-label">
          Last Login
        </span>
        <h4 className="ahr-time">
          {currentTime}
        </h4>
      </div>

    </section>
  );
}