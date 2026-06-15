import Nav from "./Nav";
import Progress from "./Progress";
import "./Eligible-question.css";
import { useState } from "react";
export default function Income({ next, prev,setFormData }) {
  const[income,setIncome] = useState("");
  const handleNext = () => {
  setFormData((prevData) => ({
    ...prevData,
    income: income,
  }));

  next();
};
  return (
    <div>
      <Nav />
     <Progress percent={50}/>
      <div className="income-container form-page">
        <div className="income-card">
          <h1 className="income-title">What is your annual family income?</h1>

          <p className="income-subtitle">
            Please select the range that best represents your total household
            income before taxes.
          </p>

          <div className="income-grid">
            <label className={`income-option ${income === "Below ₹1 Lakh" ? "selected" : ""}`}>
              <input
                type="radio"
                name="income"
                onChange={() => setIncome("Below ₹1 Lakh")}
              />
              <span>Below ₹1 Lakh</span>
            </label>

           <label className={`income-option ${income === "₹1 - 2.5 Lakhs" ? "selected" : ""}`}>
            <input
                type="radio"
                name="income"
                onChange={() => setIncome("₹1 - 2.5 Lakhs")}
              />
              <span>₹1 - 2.5 Lakhs</span>
            </label>

           <label className={`income-option ${income === "₹2.5 - 5 Lakhs" ? "selected" : ""}`}>
              <input
                type="radio"
                name="income"
                onChange={() => setIncome("₹2.5 - 5 Lakhs")}
              />
              <span>₹2.5 - 5 Lakhs</span>
            </label>

            <label className={`income-option ${income === "₹5 - 8 Lakhs" ? "selected" : ""}`}>
              <input
                type="radio"
                name="income"
                onChange={() => setIncome("₹5 - 8 Lakhs")}
              />
              <span>₹5 - 8 Lakhs</span>
              
            </label>

           <label className={`income-option ${income === "Above ₹8 Lakhs" ? "selected" : ""}`}>
              <input
                type="radio"
                name="income"
                onChange={() => setIncome("Above ₹8 Lakhs")}
              />
              <span>Above ₹8 Lakhs</span>
            </label>
          </div>

          <div className="income-info">
            <h4>ⓘ Why we ask this</h4>

            <p>
              Income thresholds are used to determine eligibility for financial
              assistance schemes.
            </p>
          </div>

          <div className="income-buttons">
            <button className="back-btn" onClick={prev}>
              ← Back
            </button>

            <button className="next-btn" onClick={handleNext} disabled={!income} >Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
