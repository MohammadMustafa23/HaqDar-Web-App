import "../Components/MatchedScheme/MatchedSchemes.css";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "../Components/Home-DashBoard/NavBar";
import Footer from "../Components/Footer/Footer";
import SchemeCard from "../Components/MatchedScheme/SchemeCard";
import UnlockMoreSchemes from "../Components/MatchedScheme/UnlockMoreSchemes";
import { getAllMatchedSchemes } from "../Services/recommendation.service";
import SchemeCardSkeleton from "../Components/Home-DashBoard/Effect/SchemeCardSkeleton";
export default function MatchedSchemes({ theme, setTheme, profileData }) {
  console.log("Matched Page Loaded");
  const user = profileData?.user;
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await getAllMatchedSchemes();
        console.log("Matched Schemes:", response);

        const formattedSchemes = response.schemes.map((item) => ({
          id: item._id,
          title: item.metadata.name,
          desc: item.metadata.benefit,
          match: Math.round(item.score * 100),
          tags: [
            item.metadata.category,
            item.metadata.schemeType,
            item.metadata.beneficiary,
          ],
          metadata: item.metadata,
        }));
        setSchemes(formattedSchemes || []);
      } catch (error) {
        console.error("Failed to fetch schemes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSchemes();
  }, []);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} profileData={user} />

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
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <SchemeCardSkeleton key={i} />
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
                {schemes.map((scheme, index) => (
                  <SchemeCard key={index} scheme={scheme} />
                ))}
              </div>

              <div className="ms-loadmore-wrapper">
                <button className="ms-loadmore-btn">
                  View More Schemes
                  <ChevronDown size={18} />
                </button>
              </div>

              <div className="ms-banner">
                <UnlockMoreSchemes />
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
