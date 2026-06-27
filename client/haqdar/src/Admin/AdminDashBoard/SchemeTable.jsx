import "./AdminDashComp.css";

import { ArrowRight } from "lucide-react";
import SchemeRow from "./SchemeRow";

export default function SchemeTable() {

  const astSchemes = [

    {
      id:1,
      name:"Mukhyamantri Vishesh Yojana",
      category:"Social Welfare",
      status:"Active",
    },

    {
      id:2,
      name:"PM Kisan Samman Nidhi",
      category:"Agriculture",
      status:"Active",
    },

    {
      id:3,
      name:"Rajasthan Vishwakarma Kalyan Yojana",
      category:"Employment",
      status:"Draft",
    },

    {
      id:4,
      name:"Post Matric Scholarship",
      category:"Education",
      status:"Active",
    }

  ];

  return (

    <section className="ast-wrapper">

      <div className="ast-header">

        <h3 className="ast-heading">
          All Schemes
        </h3>

        <button className="ast-view-btn">

          View All

          <ArrowRight size={17}/>

        </button>

      </div>

      <div className="ast-table-wrapper">

        <table className="ast-table">

          <thead>

            <tr>

              <th>Scheme Name</th>

              <th>Category</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {astSchemes.map((scheme)=>(

              <SchemeRow
                key={scheme.id}
                scheme={scheme}
              />

            ))}

          </tbody>

        </table>

      </div>

    </section>

  );

}