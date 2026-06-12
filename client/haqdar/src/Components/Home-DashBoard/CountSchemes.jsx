import { ClipboardCheck, Bookmark, Database } from "lucide-react";
import "./HomeDashBoard.css";

export default function CountSchemes() {
  return (
    <section className="count-schemes">
      <div className="scheme-card">
        <div className="icon-box">
          <ClipboardCheck size={28} />
        </div>

        <h3>TOTAL ELIGIBLE SCHEMES</h3>
        <h2>12</h2>
      </div>

      <div className="scheme-card">
        <div className="icon-box">
          <Bookmark size={28} />
        </div>

        <h3>SAVED SCHEMES</h3>
        <h2>07</h2>
      </div>

      <div className="scheme-card">
        <div className="icon-box">
          <Database size={28} />
        </div>

        <h3>TOTAL SCHEMES AVAILABLE</h3>
        <h2>500+</h2>
      </div>
    </section>
  );
}