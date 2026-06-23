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
import AiSidebar from "../../Pages/AiSidebar";
export default function Recommended({ onViewDetails, recommendations = [] ,schemesRef}) {
  const [loading, setLoading] = useState(true);
  const [isAiOpen, setIsAiOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const schemes = recommendations.map((scheme) => ({
    id: scheme._id,
    score: scheme.score,
    ...scheme.metadata,
  }));


  return (
    <section className="recommended-layout"  ref={schemesRef}>
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

            <a href="/top-matched-Schemes" className="see-all"> See all matches <ArrowRight size={18} /></a>
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
          <NoSchemesFound/>
        )}
      </div>
      <div className="recommended-right">
        {loading ? (
          <AskHaqdarAISkeleton />
        ) : (
          <AskHaqdarAI onOpen={() => setIsAiOpen(true)} />
        )}
      </div>

      <AiSidebar isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </section>
  );
}
