import "./Eligible-question.css";
import { Mars, Venus, Transgender, EyeOff } from "lucide-react";
import Nav from "./Nav";
import Progress from "./Progress";
import { useState } from "react";

export default function Gender({ next, prev ,setFormData }) {
  const [gender, setGender] = useState("");
  const handleNext = () => {
  setFormData((prevData) => ({
    ...prevData,
    gender: gender,
  }));

  next();
};
  return (
    <div>
      <Nav />
      <Progress percent={12}/>
      <div className="gender-container form-page">
        <div className="gender-card">
          <h1 className="gender-title">What is your gender?</h1>

          <p className="gender-subtitle">
            Please select the option that best describes you.
          </p>

          <div className="gender-grid">
            <label className={`gender-option ${gender === "male" ? "selected" : ""}`}>
              <input
                type="radio"
                name="gender"
                onChange={() => setGender("male")}
              />
              <div className="gender-icon">
                <Mars size={24} />
              </div>
              <span>Male</span>
            </label>

            <label className={`gender-option ${gender === "female" ? "selected" : ""}`}>
              <input
                type="radio"
                name="gender"
                onChange={() => setGender("female")}
              />
              <div className="gender-icon">
                <Venus size={24} />
              </div>
              <span>Female</span>
            </label>

             <label className={`gender-option ${gender === "other" ? "selected" : ""}`}>
              <input
                type="radio"
                name="gender"
                onChange={() => setGender("other")}
              />
              <div className="gender-icon">
                <Transgender size={24} />
              </div>
              <span>Other</span>
            </label>

             <label className={`gender-option ${gender === "not-say" ? "selected" : ""}`}>
              <input
                type="radio"
                name="gender"
                onChange={() => setGender("not-say")}
              />
              <div className="gender-icon">
                <EyeOff size={24} />
              </div>
              <span>Prefer not to say</span>
            </label>
          </div>

          <div className="gender-buttons">
            <button className="back-btn" onClick={prev}>
              ← Back
            </button>

            <button className="next-btn" onClick={handleNext} disabled={!gender}> Next Step → </button>
          </div>
        </div>
      </div>
    </div>
  );
}
