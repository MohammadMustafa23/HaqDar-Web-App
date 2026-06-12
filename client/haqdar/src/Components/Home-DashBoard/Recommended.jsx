import { ArrowRight } from "lucide-react";
import "./HomeDashBoard.css";
import Rec_SchemesCard from "./Rec_SchemesCard";
import AskHaqdarAI from "./AskHaqdarAI";
export default function Recommended() {
  return (
   <section className="recommended-layout">
     <div className="recommended-left">
        <div className="recommended-title">
          <h2>Recommended for You</h2>
          <span className="top-match">TOP MATCHES</span>
        </div>

        <a href="/" className="see-all">
          See all matches <ArrowRight size={18} />
        </a>
        <Rec_SchemesCard/>
      </div>
      <div className="recommended-right">
        <AskHaqdarAI />
      </div>
    </section>
  );
}