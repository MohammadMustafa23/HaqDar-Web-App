import "./RegisterScheme.css";

import AdminNav from "../../Admin/AdminDashBoard/AdminNavbar.jsx";
import AdminFooter from "../../Admin/AdminDashBoard/AdminFooter.jsx";

import AIImportCard from "../../Admin/RegisterScheme/AIImportCard";
import BasicDetails from "../../Admin/RegisterScheme/BasicDetails";
import EligibilityCriteria from "../../Admin/RegisterScheme/EligibilityCriteria";
import ApplicationDetails from "../../Admin/RegisterScheme/ApplicationDetails";
import ActionButtons from "../../Admin/RegisterScheme/ActionButtons";
import RegistrationGuidelines from "../../Admin/RegisterScheme/RegistrationGuidelines";

const RegisterScheme = () => {
  return (
    <>
      {/* Admin Navbar */}
      <AdminNav />

      <div className="rs-page">
        <div className="rs-container">
          {/* Header */}
          <div className="rs-header">
            <h1>Register New Scheme</h1>

            <p>
              Add a new welfare program to the HaqDar database. Use the AI
              Import feature to quickly populate fields from official government
              gazettes or notifications.
            </p>
          </div>

          {/* AI Import */}
          <AIImportCard />

          {/* Basic Details */}
          <BasicDetails />

          {/* Eligibility */}
          <EligibilityCriteria />

          {/* Application */}
          <ApplicationDetails />

          {/* Action Buttons */}
          <ActionButtons />

          {/* Guidelines */}
          <RegistrationGuidelines />
        </div>
      </div>

      {/* Admin Footer */}
      <AdminFooter />
    </>
  );
};

export default RegisterScheme;
