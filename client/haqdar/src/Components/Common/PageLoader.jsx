import "./PageLoader.css";
export default function PageLoader({
  text = "Please wait...",
}) {
  return (
    <div className="page-loader-overlay">
      <div className="page-loader-box">
        <div className="page-spinner"></div>
        <p>{text}</p>
      </div>
    </div>
  );
}