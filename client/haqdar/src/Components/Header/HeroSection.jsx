import "./HeroSection.css";
import People from "../../assets/Hero-Logo.png";
import { useNavigate } from "react-router-dom";

const trustItems = [
  "AI-Powered Matching",
  "500+ Verified Schemes",
  "Central & State Programs",
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-main">
      {/* Left Content */}
      <div className="hero-about">
        <span className="hero-badge">
          🇮🇳 Government Scheme Discovery Platform
        </span>

        <h1 className="head-head">
          Find Government Schemes You Are Eligible For
        </h1>

        <p className="hero-para">
          Answer a few simple questions and instantly discover Central and State
          Government schemes that match your profile.
        </p>

        <div className="hero-trust">
          {trustItems.map((item) => (
            <div className="trust-item" key={item}>
              <span className="hero-icon">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="hero-btns">
          <button className="hero-btn-01" onClick={() => navigate("/login")}>
            Find My Scheme
          </button>

          <button className="hero-btn-02" onClick={() => navigate("/login")}>
            Browse Schemes
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image">
        <img
          src={People}
          alt="Citizens discovering government schemes"
          loading="lazy"
        />
      </div>
    </section>
  );
}
