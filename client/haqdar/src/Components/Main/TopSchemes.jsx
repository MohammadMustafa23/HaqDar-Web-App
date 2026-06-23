import "./TopSchemes.css";
import {
  MdSchool,
  MdHealthAndSafety,
  MdApartment,
  MdCheckCircle,
  MdArrowForward,
} from "react-icons/md";
export default function TopSchemes({schemesRef}) {
  return (
    <div className="top-scheme-container" ref={schemesRef}>
      <div className="top-scheme-header">
        <h1>Top Government Schemes</h1>

        <div className="top-scheme-description">
          <p>Handpicked popular schemes based on community needs.</p>
          <span>
            View All Schemes <MdArrowForward />
          </span>
        </div>
      </div>

      <div className="top-scheme-cards">
        <div className="top-scheme-card">
          <div className="top-scheme-icon">
            <MdSchool />
          </div>

          <h2 className="top-scheme-title">National Merit Scholarship</h2>

          <p className="top-scheme-text">
            Financial assistance for high-performing students from economically
            disadvantaged backgrounds to pursue higher education.
          </p>

          <div className="top-scheme-eligible">
            <strong>Eligible For:</strong>
            <MdCheckCircle />
            <span>Students</span>
          </div>

          <div className="top-scheme-footer">
            <span className="top-scheme-dot"></span>
            <button>Check Eligibility</button>
          </div>
        </div>

        <div className="top-scheme-card">
          <div className="top-scheme-icon">
            <MdApartment />
          </div>

          <h2 className="top-scheme-title">Affordable Housing Mission</h2>

          <p className="top-scheme-text">
            Financial assistance for high-performing students from economically
            disadvantaged backgrounds to pursue higher education.
          </p>

          <div className="top-scheme-eligible">
            <strong>Eligible For:</strong>
            <MdCheckCircle />
            <span>Students</span>
          </div>

          <div className="top-scheme-footer">
            <span className="top-scheme-dot"></span>
            <button>Check Eligibility</button>
          </div>
        </div>

        <div className="top-scheme-card">
          <div className="top-scheme-icon">
            <MdHealthAndSafety />
          </div>

          <h2 className="top-scheme-title">Universal Health Insurance</h2>

          <p className="top-scheme-text">
            Providing subsidized housing loans and financial support for
            first-time urban and rural home buyers.
          </p>

          <div className="top-scheme-eligible">
            <strong>Eligible For:</strong>
            <MdCheckCircle />
            <span>Students</span>
          </div>

          <div className="top-scheme-footer">
            <span className="top-scheme-dot"></span>
            <button>Check Eligibility</button>
          </div>
        </div>
      </div>
    </div>
  );
}
