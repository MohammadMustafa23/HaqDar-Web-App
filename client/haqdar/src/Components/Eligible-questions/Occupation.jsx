import { useState } from "react";
import {
  Tractor,
  GraduationCap,
  BriefcaseBusiness,
  Store,
  Search,
} from "lucide-react";

import Nav from "./Nav";
import Progress from "./Progress";
import "./Eligible-question.css";

export default function Occupation({ next, prev }) {
  const [selectedOccupation, setSelectedOccupation] = useState("");

  const occupations = [
    {
      title: "Farmer",
      desc: "Individuals involved in agriculture, horticulture, or livestock farming.",
      icon: <Tractor size={24} />,
    },
    {
      title: "Student",
      desc: "Currently enrolled in an educational institution or pursuing vocational training.",
      icon: <GraduationCap size={24} />,
    },
    {
      title: "Daily Wage Worker",
      desc: "Workers engaged in manual labor or temporary daily tasks in various sectors.",
      icon: <BriefcaseBusiness size={24} />,
    },
    {
      title: "Self-Employed",
      desc: "Small business owners, street vendors, or independent entrepreneurs.",
      icon: <Store size={24} />,
    },
    {
      title: "Unemployed",
      desc: "Actively seeking work or currently not engaged in a primary revenue-generating occupation.",
      icon: <Search size={24} />,
    },
  ];

  return (
    <div>
      <Nav />
      <Progress percent={75}/>

      <div className="occupation-container">
        <div className="occupation-card">
          <h1 className="occupation-title">
            What is your current occupation?
          </h1>

          <p className="occupation-subtitle">
            Select the option that best describes your primary source of
            livelihood.
          </p>

          <div className="occupation-grid">
            {occupations.map((item) => (
              <div
                key={item.title}
                className={`occupation-option ${
                  selectedOccupation === item.title
                    ? "occupation-selected"
                    : ""
                } ${
                  item.title === "Unemployed"
                    ? "occupation-full-width"
                    : ""
                }`}
                onClick={() => setSelectedOccupation(item.title)}
              >
                <div className="occupation-icon">
                  {item.icon}
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="occupation-info">
            <h4>ⓘ Why we ask this</h4>
            <p>
              Your occupation determines eligibility for sector-specific
              benefits.
            </p>
          </div>

          <div className="occupation-buttons">
            <button className="back-btn" onClick={prev}>
              ← Back
            </button>

            <button
              className="next-btn"
              onClick={next}
              disabled={!selectedOccupation}
            >
              Next Step →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}