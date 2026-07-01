import { Info } from "lucide-react";

const BasicDetails = ({ schemeData, setSchemeData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchemeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="rs-card">
      <div className="rs-card-title">
        <Info size={20} />
        <h2>Basic Details</h2>
      </div>

      <div className="rs-grid">
        {/* Scheme Name */}
        <div className="rs-field rs-full">
          <label>Scheme Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter Scheme Name"
            value={schemeData.name}
            onChange={handleChange}
          />
        </div>

        {/* Category */}
        <div className="rs-field">
          <label>Category</label>

          <select
            name="category"
            value={schemeData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Women">Women</option>
            <option value="Employment">Employment</option>
            <option value="Housing">Housing</option>
            <option value="Scholarship">Scholarship</option>
          </select>
        </div>

        {/* Scheme Type */}
        <div className="rs-field">
          <label>Scheme Type</label>

          <select
            name="schemeType"
            value={schemeData.schemeType}
            onChange={handleChange}
          >
            <option value="">Select Scheme Type</option>
            <option value="Central">Central</option>
            <option value="State">State</option>
          </select>
        </div>

        {/* Scheme Number */}
        <div className="rs-field">
          <label>Scheme Number</label>

          <input
            type="number"
            name="no"
            placeholder="1001"
            value={schemeData.no}
            onChange={handleChange}
          />
        </div>

        {/* Beneficiary */}
        <div className="rs-field">
          <label>Beneficiary</label>

          <input
            type="text"
            name="beneficiary"
            placeholder="Students / Farmers / Women"
            value={schemeData.beneficiary}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;