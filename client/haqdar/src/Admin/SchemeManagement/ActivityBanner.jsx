import { ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function ActivityBanner() {
  return (
    <section className="activity-banner">
      <div className="activity-overlay">
        <div className="activity-content">
          <div className="activity-badge">
            <ShieldCheck size={16} />
            Trusted Digital Governance
          </div>

          <h2 className="activity-title">
            Empowering Every Citizen Through Smart & Transparent Governance
          </h2>

          <p className="activity-description">
            HaqDar simplifies the management of government welfare schemes by
            bringing administrators, citizens, and public services together on
            one secure, intelligent, and transparent digital platform.
          </p>

          <div className="activity-highlights">
            <div className="activity-item">
              <Sparkles size={18} />
              <span>AI Powered Recommendations</span>
            </div>

            <div className="activity-item">
              <ShieldCheck size={18} />
              <span>Secure & Verified Administration</span>
            </div>
          </div>

          <button className="activity-btn">
            Explore Platform
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
