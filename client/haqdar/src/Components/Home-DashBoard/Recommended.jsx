import { ArrowRight } from "lucide-react";
import "./HomeDashBoard.css";
import Rec_SchemesCard from "./Rec_SchemesCard";
import AskHaqdarAI from "./AskHaqdarAI";

import {
  Rec_SchemesCardSkeleton,
  AskHaqdarAISkeleton,
} from "./Effect/CompleteProfileSkeleton";

import { useState, useEffect } from "react";

export default function Recommended() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

        {loading ? <Rec_SchemesCardSkeleton /> : <Rec_SchemesCard />}
      </div>

      <div className="recommended-right">
        {loading ? <AskHaqdarAISkeleton /> : <AskHaqdarAI />}
      </div>
    </section>
  );
}
