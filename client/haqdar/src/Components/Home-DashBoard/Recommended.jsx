import { ArrowRight } from "lucide-react";
import "./HomeDashBoard.css";
import Rec_SchemesCard from "./Rec_SchemesCard";
import AskHaqdarAI from "./AskHaqdarAI";
import {
  Rec_SchemesCardSkeleton,
  AskHaqdarAISkeleton,
} from "./Effect/CompleteProfileSkeleton";
import NoSchemesFound from "./NoSchemesFound";
import { useState, useEffect } from "react";
// const schemes = [
//   {
//     id: "scheme_1",
//     score: 0.95,
//     name: "PM-Kisan Samman Nidhi",
//     benefit: "₹6,000 per year in three equal installments to farmers.",
//     category: "Farmers",
//     income: "All Eligible Farmers",
//     beneficiary: "Small and Marginal Farmers",
//     schemeType: "central",
//   },
//   {
//     id: "scheme_2",
//     score: 0.91,
//     name: "Mukhyamantri Uchcha Shiksha Scholarship",
//     benefit: "₹5,000 per year scholarship for higher education.",
//     category: "Student",
//     income: "Family income below ₹2.5 lakh/year",
//     beneficiary: "Meritorious Students",
//     schemeType: "state",
//   },
//   {
//     id: "scheme_3",
//     score: 0.88,
//     name: "Indira Gandhi Urban Employment Scheme",
//     benefit: "100 days of guaranteed employment in urban areas.",
//     category: "Employment",
//     income: "Economically Weaker Sections",
//     beneficiary: "Urban Job Seekers",
//     schemeType: "state",
//   },
//   {
//     id: "scheme_4",
//     score: 0.85,
//     name: "Devnarayan Chatra Scooty Yojana",
//     benefit: "Free Scooty + ₹2,000 petrol allowance.",
//     category: "Student",
//     income: "Family income below ₹2 lakh/year",
//     beneficiary: "Girl Students from Backward Classes",
//     schemeType: "state",
//   },
// ];
export default function Recommended({ onViewDetails, recommendations = [] }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const schemes = recommendations.map((scheme) => ({
    id: scheme.id,
    score: scheme.score,
    ...scheme.metadata,
  }));

  return (
    <section className="recommended-layout">
      <div className="recommended-left">
        {loading ? (
          <div className="recommended-title animate-pulse">
            <div className="h-10 w-80 bg-gray-200 rounded-lg"></div>
            <div className="h-8 w-28 bg-gray-200 rounded-full"></div>
            <div className="h-7 w-36 bg-gray-200 rounded-lg"></div>
          </div>
        ) : (
          <div className="recommended-header">
            <div className="recommended-title">
              <h2>Recommended for You</h2>
              <span className="top-match">TOP MATCHES</span>
            </div>

            <a href="/top-matched-Schemes" className="see-all">
              See all matches
              <ArrowRight size={18} />
            </a>
          </div>
        )}

        {loading ? (
          <Rec_SchemesCardSkeleton />
        ) : schemes?.length > 0 ? (
          schemes
            .slice(0, 3)
            .map((scheme) => (
              <Rec_SchemesCard
                key={scheme.id}
                scheme={scheme}
                onViewDetails={onViewDetails}
              />
            ))
        ) : (
          <NoSchemesFound />
        )}
      </div>

      <div className="recommended-right">
        {loading ? <AskHaqdarAISkeleton /> : <AskHaqdarAI />}
      </div>
    </section>
  );
}
