import Nav from "./Nav";
import Progress from "./Progress";
import { useState } from "react";
export default function Category({ next, prev, setFormData }) {
  const [category, setCategory] = useState("");
  const handleNext = () => {
    setFormData((prevData) => ({
      ...prevData,
      category : category,
    }));

    next();
  };
  return (
    <div>
      <Nav />
      <Progress percent={37} />
      <div className="category-container">
        <div className="category-card">
          <h1 className="category-title">What is your social category?</h1>

          <p className="category-subtitle">
            This information helps us identify schemes you may be eligible for
            based on community reservations.
          </p>

          <div className="category-info">
            <div className="info-heading">ⓘ WHY WE ASK THIS</div>
            <p>
              Several schemes are reservation-based or targeted at specific
              communities.
            </p>
          </div>

          <div className="category-grid">
            <label
              className={`category-option ${category === "General" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="category"
                onChange={() => setCategory("General")}
              />
              <span>General</span>
            </label>

            <label
              className={`category-option ${category === "OBC" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="category"
                onChange={() => setCategory("OBC")}
              />
              <span>OBC</span>
            </label>

            <label
              className={`category-option ${category === "SC" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="category"
                onChange={() => setCategory("SC")}
              />
              <span>SC</span>
            </label>

            <label
              className={`category-option ${category === "ST" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="category"
                onChange={() => setCategory("ST")}
              />
              <span>ST</span>
            </label>

            <label
              className={`category-option ${category === "EWS" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="category"
                onChange={() => setCategory("EWS")}
              />
              <div>
                <span>EWS</span>
                <p>Economically Weaker Section</p>
              </div>
            </label>
          </div>

          <div className="category-buttons">
            <button className="back-btn" onClick={prev}>
              ← Back
            </button>

            <button className="next-btn" onClick={handleNext} disabled={!category}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
