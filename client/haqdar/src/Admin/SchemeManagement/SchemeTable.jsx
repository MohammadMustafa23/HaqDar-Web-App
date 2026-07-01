import SchemeRow from "./SchemeRow";

export default function SchemeTable({
  schemes,
  loading,
  onView,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <section className="table-card">
        <div className="table-loading">Loading schemes...</div>
      </section>
    );
  }

  return (
    <section className="table-card">
      <div className="table-wrapper">
        <table className="scheme-table">
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
                <SchemeRow
                  key={scheme._id}
                  scheme={scheme}
                  onView={onView}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <tr>
                <td className="no-data" colSpan={5}>
                  No schemes found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
