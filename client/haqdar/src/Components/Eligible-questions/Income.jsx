import Nav from "./Nav";
import Progress from "./Progress";
import "./Eligible-question.css";
import { useState } from "react";

export default function Income({ next, prev, setFormData }) {
  const [income, setIncome] = useState("");

  const handleIncomeChange = (value) => {
    setIncome(value);

    setFormData((prevData) => ({
      ...prevData,
      income: value,
    }));
  };

  const handleNext = () => {
    next();
  };

  return (
    <div>
      <Nav />
      <Progress percent={50} />

      <div className="income-container form-page">
        <div className="income-card">
          <h1 className="income-title">What is your annual family income?</h1>

          <p className="income-subtitle">
            Please select the range that best represents your total household
            income before taxes.
          </p>

          <label
            className={`income-option ${income === "100000" ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="income"
              value="100000"
              checked={income === "100000"}
              onChange={() => handleIncomeChange("100000")}
            />
            <span>Below ₹1 Lakh</span>
          </label>

          <label
            className={`income-option ${income === "250000" ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="income"
              value="250000"
              checked={income === "250000"}
              onChange={() => handleIncomeChange("250000")}
            />
            <span>₹1 - 2.5 Lakhs</span>
          </label>

          <label
            className={`income-option ${income === "500000" ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="income"
              value="500000"
              checked={income === "500000"}
              onChange={() => handleIncomeChange("500000")}
            />
            <span>₹2.5 - 5 Lakhs</span>
          </label>

          <label
            className={`income-option ${income === "800000" ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="income"
              value="800000"
              checked={income === "800000"}
              onChange={() => handleIncomeChange("800000")}
            />
            <span>₹5 - 8 Lakhs</span>
          </label>

          <label
            className={`income-option ${income === "800001" ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="income"
              value="800001"
              checked={income === "800001"}
              onChange={() => handleIncomeChange("800001")}
            />
            <span>Above ₹8 Lakhs</span>
          </label>

          <div className="income-buttons">
            <button className="back-btn" onClick={prev}>
              ← Back
            </button>

            <button
              className="next-btn"
              onClick={handleNext}
              disabled={!income}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
