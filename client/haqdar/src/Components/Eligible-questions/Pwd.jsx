import { useState } from "react";
import { Accessibility, User, CheckCircle } from "lucide-react";
import Nav from "./Nav";
import Progress from "./Progress";
import "./Eligible-question.css";

export default function Pwd({ prev, setFormData, loading, handleSubmit }) {
  const [pwd, setPwd] = useState("");
  return (
    <div>
      <Nav />
      <Progress percent={87} />

      <div className="pwd-container form-page">
        <div className="pwd-card">
          <h1 className="pwd-title">
            Do you have a physical disability (PWD)?
          </h1>

          <div className="pwd-options">
            <div
              className={`pwd-option ${pwd === "Yes" ? "pwd-selected" : ""}`}
              onClick={() => {
                setPwd("Yes");

                setFormData((prev) => ({
                  ...prev,
                  pwd: "Yes",
                }));
              }}
            >
              <Accessibility size={40} />
              <h3>Yes</h3>
            </div>

            <div
              className={`pwd-option ${pwd === "No" ? "pwd-selected" : ""}`}
              onClick={() => {
                setPwd("No");

                setFormData((prev) => ({
                  ...prev,
                  pwd: "Yes",
                }));
              }}
            >
              <User size={40} />
              <h3>No</h3>
            </div>
          </div>

          <div className="pwd-buttons">
            <button className="back-btn" onClick={prev} disabled={loading}>
              ← Back
            </button>

            <button
              className="next-btn"
              disabled={!pwd || loading}
              onClick={handleSubmit}
            >
              {loading ? "Finding Schemes..." : "Finish"}
              <CheckCircle size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
