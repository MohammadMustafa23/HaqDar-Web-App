import "./Review.css";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import UserImage from "../../assets/UserReview.png";
export default function Review() {
  return (
    <div className="review-head">
      <h1 className="review-heading">What Citizens Say</h1>

      <p className="review-about">
        Real stories from people who found their empowered relief through our
        portal.
      </p>

      <div className="review-cards-row">
        <div className="review-card">
          <div className="review-card-top">
            <div className="review-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <FaQuoteRight className="review-quote-icon" />
          </div>

          <p className="review-card-text">
            "The HaqDar portal made it so easy to understand the eligibility
            criteria for the Education scholarship. I applied within 10
            minutes!"
          </p>

          <div className="review-card-bottom">
            <div className="review-user-img">
              <img src={UserImage} alt="user" />
            </div>

            <div className="review-user-about">
              <p>Mohammad Mustafa</p>

              <span>
                <MdLocationOn className="review-location-icon" />
                Bhopal, MP
              </span>
            </div>
          </div>
        </div>

        <div className="review-card">
          <div className="review-card-top">
            <div className="review-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <FaQuoteRight className="review-quote-icon" />
          </div>

          <p className="review-card-text">
            "The HaqDar portal made it so easy to understand the eligibility
            criteria for the Education scholarship. I applied within 10
            minutes!"
          </p>

          <div className="review-card-bottom">
            <div className="review-user-img">
              <img src={UserImage} alt="user" />
            </div>

            <div className="review-user-about">
              <p>Mohammad Mustafa</p>

              <span>
                <MdLocationOn className="review-location-icon" />
                Bhopal, MP
              </span>
            </div>
          </div>
        </div>

        <div className="review-card">
          <div className="review-card-top">
            <div className="review-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <FaQuoteRight className="review-quote-icon" />
          </div>

          <p className="review-card-text">
            "The HaqDar portal made it so easy to understand the eligibility
            criteria for the Education scholarship. I applied within 10
            minutes!"
          </p>

          <div className="review-card-bottom">
            <div className="review-user-img">
              <img src={UserImage} alt="user" />
            </div>

            <div className="review-user-about">
              <p>Mohammad Mustafa</p>

              <span>
                <MdLocationOn className="review-location-icon" />
                Bhopal, MP
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
