import { useEffect, useState } from "react";
import "./Review.css";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { User } from "lucide-react";
import {toast} from 'sonner'
import { getingFeatureFeedBack } from "../../Services/feedback.service.js"; // Update the path if needed

export default function Review() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedFeedbacks();
  }, []);

  const fetchFeaturedFeedbacks = async () => {
    try {
      setLoading(true);
      const res = await getingFeatureFeedBack();
      setTestimonials(res.feedbacks || []);
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch featured feedbacks",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2 className="testimonial-title">What Citizens Say</h2>

        <p className="testimonial-description">
          Real stories from people who successfully discovered government
          schemes through HaqDar.
        </p>
      </div>

      {loading ? (
        <div className="testimonial-empty">
          <h3>Loading Testimonials...</h3>
        </div>
      ) : testimonials.length === 0 ? (
        <div className="testimonial-empty">
          <h3>No Featured Reviews Yet</h3>

          <p>
            We're helping more citizens every day. Featured success stories
            selected by our team will appear here soon.
          </p>
        </div>
      ) : (
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item._id}>
              <div className="testimonial-card-header">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < item.rating
                          ? "testimonial-star-filled"
                          : "testimonial-star-empty"
                      }
                    />
                  ))}
                </div>

                <FaQuoteRight className="testimonial-quote-icon" />
              </div>

              <span className="testimonial-category">{item.category}</span>

              <p className="testimonial-message">"{item.message}"</p>

              <div className="testimonial-user">
                <div className="testimonial-avatar">
                  <User size={34} />
                </div>

                <div className="testimonial-user-info">
                  <h4>{item.userId?.userName || "Anonymous Citizen"}</h4>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
