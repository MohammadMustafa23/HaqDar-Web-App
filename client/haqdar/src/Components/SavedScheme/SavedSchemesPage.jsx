import { useEffect, useState } from "react";
import { getSavedSchemes } from "../../utils/bookmark.js";
import { toast } from "sonner";
import Rec_SchemesCard from "../Home-DashBoard/Rec_SchemesCard.jsx";
import OpenSchemes from "../../Pages/OpenSchemes.jsx";
import Footer from "../Footer/Footer.jsx";
import PageLoader from "../Common/PageLoader.jsx";
import ProfileNav from "../ProfileSection/ProfileNavBar.jsx";
import "./SavedSchemesPage.css";

export default function SavedSchemesPage({ profileData, theme, setTheme }) {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [open, setOpen] = useState(false);
  const [savedSchemes, setSavedSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = profileData?.user;

  useEffect(() => {
    const loadSavedSchemes = async () => {
      try {
        const data = getSavedSchemes();
        setSavedSchemes(data);
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Something went wrong. Please try again.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadSavedSchemes();
  }, []);

  const handleOpenScheme = (scheme) => {
    setSelectedScheme(scheme);
    setOpen(true);
  };

  if (loading) {
    return <PageLoader text="Loading your saved schemes..." />;
  }

  return (
    <>
      <ProfileNav profileData={user} theme={theme} setTheme={setTheme} />

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
