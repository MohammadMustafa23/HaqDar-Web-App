export default function QuickActions({ onSelect }) {
  const actions = [
    "Check Eligibility",
    "Required Documents",
    "How To Apply",
    "Explain Scheme",
    "Benefits",
    "Latest Schemes",
  ];

  return (
    <div className="quick-actions">
      {actions.map((action) => (
        <button
          key={action}
          onClick={() => onSelect(action)}
        >
          {action}
        </button>
      ))}
    </div>
  );
}