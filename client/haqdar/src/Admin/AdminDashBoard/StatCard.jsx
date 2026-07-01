import "./AdminDashComp.css";

export default function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="asc-card">

      <div className="asc-header">

        <div className="asc-icon">
          {icon}
        </div>

        <span className="asc-trend">
          +2 this week
        </span>

      </div>

      <p className="asc-title">
        {title}
      </p>

      <h2 className="asc-value">
        {value}
      </h2>

    </div>
  );
}