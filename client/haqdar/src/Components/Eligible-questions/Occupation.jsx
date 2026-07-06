import { useState } from "react";
import {
  Tractor,
  GraduationCap,
  BriefcaseBusiness,
  Store,
  Search,
  Building2,
} from "lucide-react";
import Nav from "./Nav";
import Progress from "./Progress";
import "./Eligible-question.css";

export default function Occupation({ next, prev, setFormData }) {
  const [selectedOccupation, setSelectedOccupation] = useState("");

  const handleOccupationChange = (occupation) => {
    setSelectedOccupation(occupation);

    setFormData((prevData) => ({
      ...prevData,
      occupation,
    }));
  };

  const handleNext = () => {
    next();
  };

  const occupations = [
    {
      title: "Farmer",
      desc: "Individuals involved in agriculture, horticulture, or livestock farming.",
      icon: <Tractor size={24} />,
    },
    {
      title: "Student",
      desc: "Currently enrolled in a school, college, university, or vocational training.",
      icon: <GraduationCap size={24} />,
    },
    {
      title: "Worker",
      desc: "Daily wage workers, labourers, factory workers, construction workers, and other employees.",
      icon: <BriefcaseBusiness size={24} />,
    },
    {
      title: "Self-Employed",
      desc: "Freelancers, street vendors, artisans, and individuals working independently.",
      icon: <Store size={24} />,
    },
    {
      title: "Business",
      desc: "Owners of shops, companies, startups, or other business enterprises.",
      icon: <Building2 size={24} />,
    },
    {
      title: "Unemployed",
      desc: "Currently not employed and actively seeking work.",
      icon: <Search size={24} />,
    },
  ];

  return (
    <div>
      <Nav />
      <Progress percent={75} />

      <div className="occupation-container form-page">
        <div className="occupation-card">
          <h1 className="occupation-title">What is your current occupation?</h1>

          <p className="occupation-subtitle">
            Select the option that best describes your primary source of
            livelihood.
          </p>

          <div className="occupation-grid">
            {occupations.map((item) => (
              <div
                key={item.title}
                className={`occupation-option ${
                  selectedOccupation === item.title ? "occupation-selected" : ""
                } ${
                  item.title === "Unemployed" ? "occupation-full-width" : ""
                }`}
                onClick={() => handleOccupationChange(item.title)}
              >
                <div className="occupation-icon">{item.icon}</div>

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
              onClick={handleNext}
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
