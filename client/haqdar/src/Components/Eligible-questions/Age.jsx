import "./Eligible-question.css";
import Nav from "./Nav";
import Progress from "./Progress";
import { useState } from "react";

export default function Age({ next, prev, setFormData }) {
  const [age, setAge] = useState("");

  const handleAgeChange = (value) => {
    setAge(value);

    setFormData((prevData) => ({
      ...prevData,
      age: value,
    }));
  };

  return (
    <div>
      <Nav />
      <Progress percent={0} />

      <div className="age-container form-page">
        <div className="age-card">
          <h1 className="age-title">What is your age?</h1>

          <div className="options">
            <button
              type="button"
              className={`age-option ${age === "17" ? "selected" : ""}`}
              onClick={() => handleAgeChange("17")}
            >
              Below 18
            </button>

            <button
              type="button"
              className={`age-option ${age === "25" ? "selected" : ""}`}
              onClick={() => handleAgeChange("25")}
            >
              18–35
            </button>

            <button
              type="button"
              className={`age-option ${age === "43" ? "selected" : ""}`}
              onClick={() => handleAgeChange("43")}
            >
              36–50
            </button>

            <button
              type="button"
              className={`age-option ${age === "55" ? "selected" : ""}`}
              onClick={() => handleAgeChange("55")}
            >
              51–60
            </button>

            <button
              type="button"
              className={`age-option ${age === "61" ? "selected" : ""}`}
              onClick={() => handleAgeChange("61")}
            >
              Above 60
            </button>
          </div>

          <div className="info-box">
            <div className="info-icon">ℹ</div>

            <div>
              <h4>Why we ask this</h4>
              <p>
                Age is a primary factor for many age-specific schemes like
                scholarships, startup grants, or pensions.
              </p>
            </div>
          </div>

          <div className="button-group">
            <button type="button" className="back-btn" onClick={prev} disabled>
              ← Back
            </button>

            <button
              type="button"
              className="next-btn"
              onClick={next}
              disabled={!age}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}