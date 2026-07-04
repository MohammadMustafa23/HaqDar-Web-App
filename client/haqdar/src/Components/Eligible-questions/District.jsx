import { useState } from "react";
import Nav from "./Nav";
import Progress from "./Progress";
import "./Eligible-question.css";

export default function District({ next, prev, setFormData }) {
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const handleNext = () => {
    setFormData((prevData) => ({
      ...prevData,
      district: selectedDistrict,
    }));

    next();
  };
  const districts = [
    "Ajmer",
    "Alwar",
    "Anupgarh",
    "Balotra",
    "Banswara",
    "Baran",
    "Barmer",
    "Beawar",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Deeg",
    "Dholpur",
    "Didwana-Kuchaman",
    "Dudu",
    "Dungarpur",
    "Gangapur City",
    "Hanumangarh",
    "Jaipur",
    "Jaipur Rural",
    "Jaisalmer",
    "Jalore",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Jodhpur Rural",
    "Karauli",
    "Kekri",
    "Khairthal-Tijara",
    "Kota",
    "Kotputli-Behror",
    "Nagaur",
    "Neem Ka Thana",
    "Pali",
    "Phalodi",
    "Pratapgarh",
    "Rajsamand",
    "Salumbar",
    "Sanchore",
    "Sawai Madhopur",
    "Shahpura",
    "Sikar",
    "Sirohi",
    "Sri Ganganagar",
    "Tonk",
    "Udaipur",
  ];
  const filteredDistricts = districts
    .filter((district) => district.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 5);

  return (
    <div>
      <Nav />
      <Progress percent={62} />

      <div className="district-container form-page">
        <div className="district-card">
          <h1 className="district-title">Which district do you reside in?</h1>

          <label className="district-label">Search District</label>

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
                  selectedDistrict === district ? "district-selected" : ""
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
