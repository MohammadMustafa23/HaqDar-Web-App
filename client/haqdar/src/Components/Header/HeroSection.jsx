import "./HeroSection.css";
import People from "../../assets/Hero-Logo.png";
export default function HeroSection() {
  return (
    <div className="hero-main">
      <div className="hero-about">
        <h1 className="head-head">
          Find Government Schemes You Are Eligible For
        </h1>

        <p className="hero-para">
          Answer a few simple questions and instantly find government schemes
          you may be eligible for.
        </p>

        <div className="hero-trust">
          {[
            "AI-Powered Matching",
            "500+ Verified Schemes",
            "Central & State Programs",
          ].map((t) => (
            <span className="trust-item" key={t}>
              <span className="icon">✓</span> {t}
            </span>
          ))}
        </div>
        <div className="hero-btns">
          <button className="hero-btn-01">Find My Scheme</button>
          <button className="hero-btn-02">Browse All Schemes</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={People} alt="People" />

        <div className="scheme-card">
          <h3>500+</h3>
          <p>Active Schemes</p>
        </div>
      </div>
    </div>
  );
}
