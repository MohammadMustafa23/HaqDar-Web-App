import SchemeRow from "./SchemeRow";

export default function SchemeTable({ schemes }) {
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
          {schemes.map((scheme) => (
            <SchemeRow key={scheme.id} scheme={scheme} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
