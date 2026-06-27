import "./AdminDashComp.css";
import { ShieldCheck } from "lucide-react";

export default function DashboardBanner() {
  return (
    <section className="adb-banner">
      <div className="adb-overlay">
        <div className="adb-content">
          <div className="adb-badge">
            <ShieldCheck size={16} />
            Government Initiative
          </div>

          <h2 className="adb-title">
            Empowering Citizens Through Digital Governance
          </h2>

          <p className="adb-desc">
            Our mission is to bridge the gap between policy and people by making
            every government scheme accessible, transparent and easy to
            understand.
          </p>
        </div>
      </div>
    </section>
  );
}
