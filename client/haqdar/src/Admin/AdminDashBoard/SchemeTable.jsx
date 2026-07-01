import "./AdminDashComp.css";

import { ArrowRight, FileX2 } from "lucide-react";
import SchemeRow from "./SchemeRow";
import { useNavigate } from "react-router-dom";

export default function SchemeTable({ schemes = [] }) {
  const navigate = useNavigate();
  return (
    <section className="ast-wrapper">
      <div className="ast-header">
        <h3 className="ast-heading">All Schemes</h3>

        <button className="ast-view-btn" onClick={() => {navigate('/admin-scheme')}}>
          View All
          <ArrowRight size={17} />
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
            {schemes?.length > 0 ? (
              schemes.map((scheme) => (
                <SchemeRow
                  key={scheme._id}
                  scheme={scheme}
                />
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  <div className="ast-empty">
                    <FileX2 size={42} />

                    <h4>No Schemes Found</h4>

                    <p>
                      There are no government schemes available yet.
                      Add your first scheme to get started.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}