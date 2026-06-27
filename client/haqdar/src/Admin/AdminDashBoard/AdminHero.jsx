import "./AdminDashComp.css";

export default function AdminHero() {
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
          Today, 09:42 AM
        </h4>

      </div>

    </section>
  );
}