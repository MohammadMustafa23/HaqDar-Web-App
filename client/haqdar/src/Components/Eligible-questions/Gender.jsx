import "./Eligible-question.css";
import { Mars, Venus, Transgender } from "lucide-react";
import Nav from "./Nav";
import Progress from "./Progress";
import { useState } from "react";

export default function Gender({ next, prev, setFormData }) {
  const [gender, setGender] = useState("");

  const handleGenderChange = (value) => {
    setGender(value);

    setFormData((prevData) => ({
      ...prevData,
      gender: value,
    }));
  };

  const handleNext = () => {
    next();
  };

  return (
    <div>
      <Nav />
      <Progress percent={12} />

      <div className="gender-container form-page">
        <div className="gender-card">
          <h1 className="gender-title">What is your gender?</h1>

          <p className="gender-subtitle">
            Please select the option that best describes you.
          </p>

          <div className="gender-grid">
            <label
              className={`gender-option ${gender === "male" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={() => handleGenderChange("male")}
              />
              <div className="gender-icon">
                <Mars size={24} />
              </div>
              <span>Male</span>
            </label>

            <label
              className={`gender-option ${gender === "female" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={() => handleGenderChange("female")}
              />
              <div className="gender-icon">
                <Venus size={24} />
              </div>
              <span>Female</span>
            </label>

            <label
              className={`gender-option ${gender === "other" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={() => handleGenderChange("other")}
              />
              <div className="gender-icon">
                <Transgender size={24} />
              </div>
              <span>Other</span>
            </label>
          </div>

          <div className="gender-buttons">
            <button className="back-btn" onClick={prev}>
              ← Back
            </button>

            <button
              className="next-btn"
              onClick={handleNext}
              disabled={!gender}
            >
              Next Step →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
