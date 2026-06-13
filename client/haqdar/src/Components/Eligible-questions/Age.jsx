import "./Eligible-question.css";
import Nav from "./Nav";
import Progress from "./Progress";
import { useState } from "react";
export default function Age({ next, prev }) {
  const[age,setAge] = useState("");
  return (
    <div>
      <Nav />
      <Progress percent={0}/>
      <div className="age-container">
        <div className="age-card">
          <h1 className="age-title">What is your age?</h1>

          <div className="options">
            <label className={`age-option ${age === "Below 18" ? "selected" : ""}`}>
               <input
                type="radio"
                name="age"
                onChange={() => setAge("Below 18")}
              />
              <span>Below 18</span>
            </label>

           <label className={`age-option ${age === "18-35" ? "selected" : ""}`}>
               <input
                type="radio"
                name="age"
                onChange={() => setAge("18-35")}
              />
              <span>18-35</span>
            </label>

            <label className={`age-option ${age === "36-50" ? "selected" : ""}`}>
              <input
                type="radio"
                name="age"
                onChange={() => setAge("36-50")}
              />
              <span>36-50</span>
            </label>

            <label className={`age-option ${age === "51-60" ? "selected" : ""}`}>
               <input
                type="radio"
                name="age"
                onChange={() => setAge("51-60")}
              />
              <span>51-60</span>
            </label>

           <label className={`age-option ${age === "Above 60" ? "selected" : ""}`}>
               <input
                type="radio"
                name="age"
                onChange={() => setAge("Above 60")}
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
            <button className="back-btn" onClick={prev} disabled={true}>
              ← Back
            </button>

            <button className="next-btn" onClick={next} disabled={!age} >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
