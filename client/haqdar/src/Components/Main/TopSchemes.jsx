import "./TopSchemes.css";
import {
  MdSchool,
  MdHealthAndSafety,
  MdApartment,
  MdCheckCircle,
  MdArrowForward
} from "react-icons/md";
export default function TopSchemes() {
  return (
    <div className="Top_Schemes-head">
      <div className="Top_Sehemes-about">
        <h1>Top Government Schemes</h1>
        <div className="Top-Sehemes-description">
          <p>Handpicked popular schemes based on community needs.</p>
          <span>View All Schemes <MdArrowForward /></span>
        </div>
      </div>

      <div className="cards-row">
        <div className="card-head">
          <div className="card-icon">
            <MdSchool />
          </div>
          <h2 className="card-heading">National Merit Scholarship</h2>
          <p className="card-about">
            Financial assistance for high-performing students from economically
            disadvantaged backgrounds to pursue higher education.
          </p>

          <div className="card-eligible">
            <strong>Eligible For:</strong>
            <MdCheckCircle />
            <span>Students</span>
          </div>

          <div className="card-bottom">
            <span className="card-icon-02"></span>
            <button>Check Eligibility</button>
          </div>
        </div>

        <div className="card-head">
          <div className="card-icon">
            <MdApartment/>
          </div>
          <h2 className="card-heading">Affordable Housing Mission</h2>
          <p className="card-about">
            Financial assistance for high-performing students from economically
            disadvantaged backgrounds to pursue higher education.
          </p>

          <div className="card-eligible">
            <strong>Eligible For:</strong>
            <MdCheckCircle />
            <span>Students</span>
          </div>

          <div className="card-bottom">
            <span className="card-icon-02"></span>
            <button>Check Eligibility</button>
          </div>
        </div>

        <div className="card-head">
          <div className="card-icon">
            <MdHealthAndSafety/>
          </div>
          <h2 className="card-heading">Universal Health Insurance</h2>
          <p className="card-about">
            Providing subsidized housing loans and financial support for
            first-time urban and rural home buyers.
          </p>

          <div className="card-eligible">
            <strong>Eligible For:</strong>
            <MdCheckCircle />
            <span>Students</span>
          </div>

          <div className="card-bottom">
            <span className="card-icon-02"></span>
            <button>Check Eligibility</button>
          </div>
        </div>
      </div>
    </div>
  );
}
