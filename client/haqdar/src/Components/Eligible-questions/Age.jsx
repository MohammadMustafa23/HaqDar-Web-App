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

  const handleNext = () => {
    next();
  };

  return (
    <div>
      <Nav />
      <Progress percent={0} />

      <div className="age-container form-page">
        <div className="age-card">
          <h1 className="age-title">What is your age?</h1>

          <div className="options">
            <label className={`age-option ${age === "17" ? "selected" : ""}`}>
              <input
                type="radio"
                name="age"
                value="17"
                checked={age === "17"}
                onChange={() => handleAgeChange("17")}
              />
              <span>Below 18</span>
            </label>

            <label className={`age-option ${age === "25" ? "selected" : ""}`}>
              <input
                type="radio"
                name="age"
                value="25"
                checked={age === "25"}
                onChange={() => handleAgeChange("25")}
              />
              <span>18–35</span>
            </label>

            <label className={`age-option ${age === "43" ? "selected" : ""}`}>
              <input
                type="radio"
                name="age"
                value="43"
                checked={age === "43"}
                onChange={() => handleAgeChange("43")}
              />
              <span>36–50</span>
            </label>

            <label className={`age-option ${age === "55" ? "selected" : ""}`}>
              <input
                type="radio"
                name="age"
                value="55"
                checked={age === "55"}
                onChange={() => handleAgeChange("55")}
              />
              <span>51–60</span>
            </label>

            <label className={`age-option ${age === "61" ? "selected" : ""}`}>
              <input
                type="radio"
                name="age"
                value="61"
                checked={age === "61"}
                onChange={() => handleAgeChange("61")}
              />
              <span>Above 60</span>
            </label>
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
            <button className="back-btn" onClick={prev} disabled>
              ← Back
            </button>

            <button className="next-btn" onClick={handleNext} disabled={!age}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
