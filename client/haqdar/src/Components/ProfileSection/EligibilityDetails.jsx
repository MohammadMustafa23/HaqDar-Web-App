import { RefreshCcw } from "lucide-react";

export default function EligibilityDetails({profile}) {
  return (
    <div className="hd-profile-card">

      <div className="hd-profile-card-header">
        <h3>Eligibility Details</h3>
        <RefreshCcw size={16} />
      </div>

      <div className="hd-profile-details-grid">

        <div>
          <label>Age</label>
          <input value={profile.age} readOnly />
        </div>

        <div>
          <label>Category</label>
          <input value={profile.category} readOnly />
        </div>

        <div>
          <label>District</label>
          <input value={profile.district} readOnly />
        </div>

        <div>
          <label>Education</label>
          <input value={profile.education} readOnly />
        </div>

        <div>
          <label>Gender</label>
          <input value={profile.gender} readOnly />
        </div>

        <div>
          <label>Income</label>
          <input value={"₹ " + profile.income } readOnly />
        </div>

        <div>
          <label>Occupation</label>
          <input value={profile.occupation} readOnly />
        </div>

        <div>
          <label>PWD Status</label>
          <input value={profile.pwd} readOnly />
        </div>

      </div>
    </div>
  );
}