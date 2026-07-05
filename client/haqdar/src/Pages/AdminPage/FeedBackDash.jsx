import { useCallback, useEffect, useState } from "react";
import "./FeedBackDash.css";

// Layout
import AdminNav from "../../Admin/AdminDashBoard/AdminNavbar";
import AdminFooter from "../../Components/Footer/Footer.jsx";

// Components
import FeedbackHeader from "../../Admin/FeedbackDash/FeedbackHeader";
import FeedbackStats from "../../Admin/FeedbackDash/FeedbackStats";
import FeedbackFilter from "../../Admin/FeedbackDash/FeedbackFilter";
import FeedbackTable from "../../Admin/FeedbackDash/FeedbackTable";
import PageLoader from "../../Components/Common/PageLoader.jsx";

// Services
import { getAllFeedbacks } from "../../Services/feedback.service.js";

export default function FeedbackManagement() {
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    status: "All",
  });
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFeedbacks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const res = await getAllFeedbacks();
      setFeedbacks(res.feedbacks || []);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to load feedbacks.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  if (loading) {
    return <PageLoader text="Loading Feedbacks..." />;
  }

  return (
    <>
      <AdminNav />

      <main className="fm-page">
        <div className="fm-container">
          <FeedbackHeader />

          <FeedbackStats feedbacks={feedbacks} />

          <FeedbackFilter filters={filters} setFilters={setFilters} />

          <FeedbackTable
            feedbacks={feedbacks}
            filters={filters}
            error={error}
            fetchFeedbacks={fetchFeedbacks}
          />
        </div>

        <AdminFooter />
      </main>
    </>
  );
}
