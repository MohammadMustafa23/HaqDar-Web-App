import "./HomeDashBoard.css";
import { ArrowRight, IndianRupee, Users } from "lucide-react";
export default function Rec_SchemesCard() {
  return (
    <div className="scheme-card">
      <h3>PM-Kisan Samman Nidhi</h3>

      <p>
        Financial benefit of ₹6,000 per year in three equal installments to all
        landholding farmer families.
      </p>

      <div className="scheme-tags">
        <span className="tag">
          <IndianRupee size={18} />
          ₹6,000 / year
        </span>

        <span className="tag">
          <Users size={18} />
          Farmers
        </span>
      </div>

      <button className="details-btn">
        Check Details
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
