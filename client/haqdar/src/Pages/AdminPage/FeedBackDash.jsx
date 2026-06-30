import { useEffect, useState } from "react";
import "./FeedBackDash.css";

import FeedbackHeader from "../../Admin/FeedbackDash/FeedbackHeader";
import FeedbackStats from "../../Admin/FeedbackDash/FeedbackStats";
import FeedbackFilter from "../../Admin/FeedbackDash/FeedbackFilter";
import FeedbackTable from "../../Admin/FeedbackDash/FeedbackTable";
import AdminNav from "../../Admin/AdminDashBoard/AdminNavbar";
import AdminFooter from "../../Admin/AdminDashBoard/AdminFooter";
import PageLoader from '../../Components/Common/PageLoader.jsx'
import { getAllFeedbacks } from "../../Services/feedback.service.js";

export default function FeedbackManagement() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const res = await getAllFeedbacks();

      setFeedbacks(res.feedbacks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  if (loading) {
    return <PageLoader text="Geting FeedBacks"/>;
  }

  return (
    <>
      <AdminNav />

      <div className="fm-page">
        <div className="fm-container">
          <FeedbackHeader />

          <FeedbackStats feedbacks={feedbacks} />

          <FeedbackFilter />

          <FeedbackTable
            feedbacks={feedbacks}
            loading={loading}
            fetchFeedbacks={fetchFeedbacks}
          />
        </div>

        <AdminFooter />
      </div>
    </>
  );
}