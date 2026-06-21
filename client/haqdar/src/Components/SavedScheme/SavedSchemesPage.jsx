import { getSavedSchemes } from "../../utils/bookmark.js";
import { useEffect, useState } from "react";
import Rec_SchemesCard from "../Home-DashBoard/Rec_SchemesCard.jsx";

export default function SavedSchemesPage() {
  const [savedSchemes, setSavedSchemes] = useState([]);

 useEffect(() => {
    const data = getSavedSchemes();
    console.log("Saved Data:", data);
    setSavedSchemes(data);
},[]);

  return (
    <div className="saved-page">
      <h2>Saved Schemes</h2>

      {savedSchemes.length === 0 ? (
        <p>No saved schemes yet.</p>
      ) : (
        <div className="scheme-grid">
          {savedSchemes.map((scheme) => (
            <Rec_SchemesCard
              key={scheme.id}
              scheme={scheme}
            />
          ))}
        </div>
      )}
    </div>
  );
}