import Nav from "./Nav";
import Progress from "./Progress";
import "./Eligible-question.css";
import { useState } from "react";

export default function Education({ next, prev, setFormData }) {
  const [education, setEducation] = useState("");

  const handleEducationChange = (value) => {
    setEducation(value);

    setFormData((prevData) => ({
      ...prevData,
      education: value,
    }));
  };

  const handleNext = () => {
    next();
  };

  return (
    <div>
      <Nav />
      <Progress percent={25} />

      <div className="education-container form-page">
        <div className="education-card">
          <h1 className="education-title">
            What is your highest education level?
          </h1>

          <div className="education-options">
            <label
              className={`education-option ${
                education === "No Schooling" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="education"
                value="No Schooling"
                checked={education === "No Schooling"}
                onChange={() => handleEducationChange("No Schooling")}
              />
              <span>No Schooling</span>
            </label>

            <label
              className={`education-option ${
                education === "Below 10th" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="education"
                value="Below 10th"
                checked={education === "Below 10th"}
                onChange={() => handleEducationChange("Below 10th")}
              />
              <span>Below 10th</span>
            </label>

            <label
              className={`education-option ${
                education === "10th Pass" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="education"
                value="10th Pass"
                checked={education === "10th Pass"}
                onChange={() => handleEducationChange("10th Pass")}
              />
              <span>10th Pass</span>
            </label>

            <label
              className={`education-option ${
                education === "12th Pass" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="education"
                value="12th Pass"
                checked={education === "12th Pass"}
                onChange={() => handleEducationChange("12th Pass")}
              />
              <span>12th Pass</span>
            </label>

            <label
              className={`education-option ${
                education === "Diploma" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="education"
                value="Diploma"
                checked={education === "Diploma"}
                onChange={() => handleEducationChange("Diploma")}
              />
              <span>Diploma</span>
            </label>

            <label
              className={`education-option ${
                education === "ITI" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="education"
                value="ITI"
                checked={education === "ITI"}
                onChange={() => handleEducationChange("ITI")}
              />
              <span>ITI</span>
            </label>

            <label
              className={`education-option ${
                education === "Graduate" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="education"
                value="Graduate"
                checked={education === "Graduate"}
                onChange={() => handleEducationChange("Graduate")}
              />
              <span>Graduate</span>
            </label>

            <label
              className={`education-option ${
                education === "Post Graduate" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="education"
                value="Post Graduate"
                checked={education === "Post Graduate"}
                onChange={() => handleEducationChange("Post Graduate")}
              />
              <span>Post Graduate</span>
            </label>

            <label
              className={`education-option ${
                education === "Doctorate" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="education"
                value="Doctorate"
                checked={education === "Doctorate"}
                onChange={() => handleEducationChange("Doctorate")}
              />
              <span>Doctorate</span>
            </label>
          </div>

          <div className="education-buttons">
            <button className="back-btn" onClick={prev}>
              ← Back
            </button>

            <button
              className="next-btn"
              onClick={handleNext}
              disabled={!education}
            >
              Next Step →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
