export default function Progress({ percent }) {
  return (
    <div className="progress-container">
      <div className="progress-header">
        <span>Progress</span>
        <span>{percent}% Complete</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}