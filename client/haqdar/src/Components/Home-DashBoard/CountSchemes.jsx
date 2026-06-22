import { ClipboardCheck, Bookmark, Database } from "lucide-react";
import "./HomeDashBoard.css";
import { useState, useEffect } from "react";
import { CountSchemesSkeleton } from "./Effect/CompleteProfileSkeleton";
export default function CountSchemes({ total }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  function TotalSaveScheme() {
    const savedSchemes =
      JSON.parse(localStorage.getItem("haqdar_saved_schemes")) || [];
    const totalSavedSchemes = savedSchemes.length;
    return totalSavedSchemes;
  }

  if (loading) {
    return (
      <>
        <CountSchemesSkeleton />
      </>
    );
  }
  return (
    <section className="count-schemes">
      <div className="scheme-card">
        <div className="icon-box">
          <ClipboardCheck size={28} />
        </div>

        <h3>TOTAL ELIGIBLE SCHEMES</h3>
        <h2>{total.length || 0}</h2>
      </div>

      <div className="scheme-card">
        <div className="icon-box">
          <Bookmark size={28} />
        </div>

        <h3>SAVED SCHEMES</h3>
        <h2>{TotalSaveScheme()}</h2>
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
