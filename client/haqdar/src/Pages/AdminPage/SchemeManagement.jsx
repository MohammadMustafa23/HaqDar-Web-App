import "./SchemeManagement.css";

import AdminNavbar from "../../Admin/AdminDashBoard/AdminNavbar.jsx";
import AdminFooter from "../../Admin/AdminDashBoard/AdminFooter.jsx";

import SchemeHeader from "../../Admin/SchemeManagement/SchemeHeader.jsx";
import SchemeFilters from "../../Admin/SchemeManagement/SchemeFilters.jsx";
import SchemeTable from "../../Admin/SchemeManagement/SchemeTable.jsx";
import Pagination from "../../Admin/SchemeManagement/Pagination.jsx";
import ActivityBanner from "../../Admin/SchemeManagement/ActivityBanner.jsx";

import schemes from "../../Admin/SchemeManagement/schemeData.js";

export default function SchemeManagement() {
  return (
    <div className="scheme-page">
      <AdminNavbar />

      <div className="scheme-container">
        <SchemeHeader />

        <SchemeFilters />

        <SchemeTable schemes={schemes} />

        <Pagination />

        <ActivityBanner />
      </div>

      <AdminFooter />
    </div>
  );
}
