import { useState } from "react";
import "./FeedbackForm.css";
import { toast } from "sonner";
import { submitFeedback } from "../../Services/feedback.service.js";
import PageLoader from '../Common/PageLoader.jsx'
import ProfileNav from '../../Components/ProfileSection/ProfileNavBar.jsx'
export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    category: "Scheme Issue",
    subject: "",
    message: "",
    rating: 0,
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await submitFeedback(formData);
      toast.success(response.message);
      setFormData({
        category: "Scheme Issue",
        subject: "",
        message: "",
        rating: 0,
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to submit feedback",
      );
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <PageLoader text="Submitting your feedback..." />;
  }
  return (
    <>
     <ProfileNav/>
    <div className="feedback-page">
      <div className="feedback-container">
        <div className="feedback-header">
          <h1>Share Your Feedback</h1>
          <p>
            Tell us about your experience with HaqDar. We read every message.
          </p>
        </div>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="feedback-grid">
            <div className="form-group">
              <label>Feedback Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Scheme Issue</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>General Feedback</option>
              </select>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Briefly describe the topic"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Detailed Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell us more about your experience..."
            />
          </div>

          <div className="rating-card">
            <h4>How satisfied are you with our service?</h4>

            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={formData.rating >= star ? "star active" : "star"}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      rating: star,
                    })
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <div className="rating-labels">
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </div>

          <div className="button-group">
            <button
              type="submit"
              className="submit-btn"
              disabled={
                loading ||
                !formData.subject.trim() ||
                !formData.message.trim() ||
                !formData.rating
              }
            >
              {loading ? "Submitting..." : "➤ Submit Feedback"}
            </button>

            <button type="button" className="clear-btn">
              Clear Form
            </button>
          </div>

          <p className="privacy-text">
            By submitting, you agree to our Privacy Policy. We do not share your
            personal information with third parties.
          </p>
        </form>
      </div>
    </div>
  </>
  );
}
