import { getSavedSchemes } from "../../utils/bookmark.js";
import { useEffect, useState } from "react";
import Rec_SchemesCard from "../Home-DashBoard/Rec_SchemesCard.jsx";
import OpenSchemes from "../../Pages/OpenSchemes.jsx";
import NavBar from "../Home-DashBoard/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";

import "./SavedSchemesPage.css";

export default function SavedSchemesPage({ profileData }) {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [open, setOpen] = useState(false);
  const [savedSchemes, setSavedSchemes] = useState([]);
  const user = profileData?.user;
  useEffect(() => {
    const data = getSavedSchemes();
    setSavedSchemes(data);
  }, []);

  const handleOpenScheme = (scheme) => {
    setSelectedScheme(scheme);
    setOpen(true);
  };
  return (
    <>
      <NavBar profileData={user} />

      <main className="saved-page">
        <div className="saved-container">
          <div className="saved-heading">
            <h2>Saved Schemes</h2>
            <p>Review and apply for the schemes you've bookmarked.</p>
          </div>

          {savedSchemes.length === 0 ? (
            <div className="empty-state">
              <h3>No Saved Schemes</h3>
              <p>Start bookmarking schemes to view them here.</p>
            </div>
          ) : (
            <div className="scheme-list">
              {savedSchemes.map((scheme) => (
                <Rec_SchemesCard
                  key={scheme.id}
                  scheme={scheme}
                  onViewDetails={handleOpenScheme}
                />
              ))}
            </div>
          )}
        </div>
        {open && (
          <OpenSchemes scheme={selectedScheme} onClose={() => setOpen(false)} />
        )}
      </main>
      <Footer />
    </>
  );
}
