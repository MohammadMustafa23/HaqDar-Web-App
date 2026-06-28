import "./FeedBackDash.css";

import FeedbackHeader from "../../Admin/FeedbackDash/FeedbackHeader.jsx";
import FeedbackStats from "../../Admin/FeedbackDash/FeedbackStats";
import FeedbackFilter from "../../Admin/FeedbackDash/FeedbackFilter";
import AdminNav from '../../Admin/AdminDashBoard/AdminNavbar.jsx'

import FeedbackTable from "../../Admin/FeedbackDash/FeedbackTable.jsx";
import AdminFooter from "../../Admin/AdminDashBoard/AdminFooter.jsx";
// import FeedbackFooter from "./components/FeedbackFooter";

export default function FeedbackManagement() {
  return (
    <>
     <AdminNav/>
    <div className="fm-page">
     
      <div className="fm-container">
       
        <FeedbackHeader />

        <FeedbackStats />

        <FeedbackFilter />

        <FeedbackTable />
      </div>

      <AdminFooter/>
    </div>
     </>
  );
}
