import "./Review.css";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import UserImage from '../../assets/UserReview.png';
export default function Review() {
  return (
    <div className="Review-head">
      <h1 className="Review-heading">What Citizens Say</h1>
      <p className="Review-about">
        Real stories from people who found their empowered relief through our
        portal.
      </p>

      <div className="cards-row">
        <div className="card-head">
            <div className="card-top">
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <FaQuoteRight className="quote-icon" />
            </div>
            <p className="card-review">
               "The HaqDar portal made it so easy to understand the eligibility
                criteria for the Education scholarship. I applied within 10
                minutes!"
            </p>

             <div className="card-bottom" >
                <div className="user-img">
                     <img src={UserImage} alt="user" />
                </div>
                <div className="user-about">
                  <p>Mohammad Mustafa</p>
                  <span><MdLocationOn className="location-icon" />Bhopal, MP</span>
                </div>
            </div>
        </div>
         <div className="card-head">
            <div className="card-top">
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <FaQuoteRight className="quote-icon" />
            </div>
            <p className="card-review">
               "The HaqDar portal made it so easy to understand the eligibility
                criteria for the Education scholarship. I applied within 10
                minutes!"
            </p>

             <div className="card-bottom" >
                <div className="user-img">
                     <img src={UserImage} alt="user" />
                </div>
                <div className="user-about">
                  <p>Mohammad Mustafa</p>
                  <span><MdLocationOn className="location-icon" />Bhopal, MP</span>
                </div>
            </div>
        </div>
         <div className="card-head">
            <div className="card-top">
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <FaQuoteRight className="quote-icon" />
            </div>
            <p className="card-review">
               "The HaqDar portal made it so easy to understand the eligibility
                criteria for the Education scholarship. I applied within 10
                minutes!"
            </p>

             <div className="card-bottom" >
                <div className="user-img">
                     <img src={UserImage} alt="user" />
                </div>
                <div className="user-about">
                  <p>Mohammad Mustafa</p>
                  <span><MdLocationOn className="location-icon" />Bhopal, MP</span>
                </div>
            </div>
        </div>      
      </div>
    </div>
  );
}
