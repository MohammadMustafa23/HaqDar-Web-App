import { useState } from "react";
import Nav from "./Nav";
import Progress from "./Progress";
import "./Eligible-question.css";

export default function District({ next, prev,setFormData }) {
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const handleNext = () => {
  setFormData((prevData) => ({
    ...prevData,
    district : selectedDistrict,
  }));

  next();
};
  const districts = [
    "Jaipur",
    "Jodhpur",
    "Udaipur",
    "Kota",
    "Ajmer",
    "Alwar",
    "Bikaner",
    "Bharatpur",
    "Sikar",
    "Pali",
    "Tonk",
    "Churu",
    "Barmer",
    "Jhalawar",
    "Dausa",
    "Nagaur",
    "Bundi",
    "Jhunjhunu",
    "Hanumangarh",
    "Sri Ganganagar",
  ];

  const filteredDistricts = districts.filter((district) =>
    district.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Nav />
      <Progress percent={62}/>

      <div className="district-container">
        <div className="district-card">
          <h1 className="district-title">
            Which district do you reside in?
          </h1>

          <label className="district-label">
            Search District
          </label>

          <input
            type="text"
            placeholder="Type to search..."
            className="district-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="district-list">
            {filteredDistricts.map((district) => (
              <div
                key={district}
                className={`district-item ${
                  selectedDistrict === district
                    ? "district-selected"
                    : ""
                }`}
                onClick={() => setSelectedDistrict(district)}
              >
                <span>{district}</span>
                <span>Rajasthan</span>
              </div>
            ))}
          </div>

          <div className="district-buttons">
            <button className="back-btn" onClick={prev}>
              ← Back
            </button>

            <button
              className="next-btn"
              onClick={handleNext}
              disabled={!selectedDistrict}
            >
              Next Step →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}