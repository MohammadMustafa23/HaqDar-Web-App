import SchemeRow from "./SchemeRow";

export default function SchemeTable({ schemes,loading,onView,onEdit,onDelete }) {
  if (loading) {
    return (
      <div className="table-card">
        <div className="table-loading">Loading schemes...</div>
      </div>
    );
  }

  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>Scheme Name</th>
            <th>Category</th>
            <th>Last Updated</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {schemes.length > 0 ? (
            schemes.map((scheme) => (
              <SchemeRow key={scheme._id} scheme={scheme} onView={onView} onEdit={onEdit} onDelete={onDelete} />
            ))
          ) : (
            <tr>
              <td colSpan={5} className="no-data">
                No schemes found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
