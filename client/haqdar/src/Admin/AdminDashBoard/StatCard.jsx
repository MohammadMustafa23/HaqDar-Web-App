import "./AdminDashComp.css";
import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}) {
  return (
    <div className="asc-card">

      <div className="asc-top">

        <div className="asc-icon">
          {icon}
        </div>

        <ArrowUpRight
          className="asc-arrow"
          size={18}
        />

      </div>

      <h2 className="asc-value">
        {value}
      </h2>

      <h4 className="asc-title">
        {title}
      </h4>

      <p className="asc-subtitle">
        {subtitle}
      </p>

    </div>
  );
}