import "../Components/MatchedScheme/MatchedSchemes.css";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import MatchedScheme_NavBar from "../Components/MatchedScheme/MatchedScheme_NavBar.jsx";
import Footer from "../Components/Footer/Footer";
import SchemeCard from "../Components/MatchedScheme/SchemeCard";
import UnlockMoreSchemes from "../Components/MatchedScheme/UnlockMoreSchemes";
import { getAllMatchedSchemes } from "../Services/recommendation.service";
import SchemeCardSkeleton from "../Components/Home-DashBoard/Effect/SchemeCardSkeleton";
import { toast } from "sonner";
import OpenSchemes from "./OpenSchemes";
export default function MatchedSchemes({ theme, setTheme, profileData }) {
  const [visibleCount, setVisibleCount] = useState(10);
  const user = profileData?.user;
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const handleOpenScheme = (scheme) => {
    setSelectedScheme(scheme);
    setOpen(true);
  };
  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await getAllMatchedSchemes();
        const formattedSchemes = response.schemes.map((scheme) => ({
          id: scheme._id,
          score: scheme.score,
          title: scheme.metadata.name,
          desc: scheme.metadata.benefit,
          match: Math.round(scheme.score * 100),
          tags: [
            scheme.metadata.category,
            scheme.metadata.schemeType,
            scheme.metadata.beneficiary,
          ],
          ...scheme.metadata,
        }));
        setSchemes(formattedSchemes || []);
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
    fetchSchemes();
  }, []);

  return (
    <>
      <MatchedScheme_NavBar
        theme={theme}
        setTheme={setTheme}
        profileData={user}
      />

      <main className="ms-page">
        <div className="ms-container">
          {loading ? (
            <>
              {/* Header Skeleton */}
              <div className="animate-pulse mb-10">
                <div className="h-10 w-80 bg-gray-200 rounded-xl mx-auto mb-4"></div>
                <div className="h-4 w-96 bg-gray-200 rounded mx-auto"></div>
              </div>

              {/* Cards Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(visibleCount)].map((_, index) => (
                  <div
                    key={index}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <SchemeCardSkeleton />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="ms-header">
                <h1 className="ms-title">Your Top Matched Schemes</h1>

                <p className="ms-subtitle">
                  Based on your profile, you are eligible for these{" "}
                  {schemes.length} schemes.
                </p>
              </div>

              <div className="ms-grid">
                {schemes.slice(0, visibleCount).map((scheme) => (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    onViewDetails={handleOpenScheme}
                  />
                ))}
              </div>

              {visibleCount < schemes.length && (
                <div className="ms-loadmore-wrapper">
                  <button
                    className="ms-loadmore-btn"
                    onClick={() =>
                      setVisibleCount((prev) =>
                        Math.min(prev + 10, schemes.length),
                      )
                    }
                  >
                    View More Schemes ({schemes.length - visibleCount}{" "}
                    Remaining)
                    <ChevronDown size={18} />
                  </button>
                </div>
              )}

              <div className="ms-banner">
                <UnlockMoreSchemes />
              </div>
            </>
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
