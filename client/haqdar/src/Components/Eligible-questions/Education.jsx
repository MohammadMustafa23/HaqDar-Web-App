import Nav from "./Nav";
import Progress from "./Progress";
import "./Eligible-question.css";
import "./Eligible-question.css";
import { useState } from "react";

export default function Education({ next, prev }) {
   const [education, setEducation] = useState("");
  return (
    <div>
        <Nav/>
        <Progress percent={25}/>
    <div className="education-container">
      <div className="education-card">
        <h1 className="education-title">
          What is your highest education level?
        </h1>

        <div className="education-options">
           <label className={`education-option ${education === "below 10" ? "selected" : ""}`}>
            <input
                type="radio"
                name="education"
                onChange={() => setEducation("below 10")}
              />
            <span>Below 10th</span>
          </label>

           <label className={`education-option ${education === "10th/12th pass" ? "selected" : ""}`}>
            <input
                type="radio"
                name="education"
                onChange={() => setEducation("10th/12th pass")}
              />
            <span>10th/12th Pass</span>
          </label>

           <label className={`education-option ${education === "graduate" ? "selected" : ""}`}>
            <input
                type="radio"
                name="education"
                onChange={() => setEducation("graduate")}
              />
            <span>Graduate</span>
          </label>

          <label className={`education-option ${education === "post-graduate" ? "selected" : ""}`}>
           <input
                type="radio"
                name="education"
                onChange={() => setEducation("post-graduate")}
              />
            <span>Post-Graduate</span>
          </label>

           <label className={`education-option ${education === "Technical/Vocational" ? "selected" : ""}`}>
            <input
                type="radio"
                name="education"
                onChange={() => setEducation("Technical/Vocational")}
              />
            <span>Technical/Vocational</span>
          </label>
        </div>

        <div className="education-buttons">
          <button className="back-btn" onClick={prev}>
            ← Back
          </button>

          <button className="next-btn" onClick={next} disabled={!education} >Next Step →</button>
        </div>
      </div>
    </div>
    </div>
  );
}