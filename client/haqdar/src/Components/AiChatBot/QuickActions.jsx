import {
  BadgeCheck,
  GraduationCap,
  Tractor,
  HelpCircle,
  HeartPulse,
  PiggyBank,
} from "lucide-react";

import "./AiSidebar.css";

export default function QuickActions({ onSelect }) {
  const actions = [
    {
      icon: <HelpCircle size={16} />,
      label: "How To Use HaqDar",
    },
    {
      icon: <BadgeCheck size={16} />,
      label: "Check Eligibility",
    },
    {
      icon: <GraduationCap size={16} />,
      label: "Student Schemes",
    },
    {
      icon: <Tractor size={16} />,
      label: "Farmer Schemes",
    },
    {
      icon: <HeartPulse size={16} />,
      label: "Health & Medical Schemes",
    },
    {
      icon: <PiggyBank size={16} />,
      label: "Pension Schemes",
    },
  ];

  return (
    <div className="ai-quick-actions">
      {actions.map((action) => (
        <button
          key={action.label}
          className="ai-quick-actions-btn"
          onClick={() => onSelect(action.label)}
        >
          <span className="ai-quick-actions-icon">{action.icon}</span>

          <span className="ai-quick-actions-label">{action.label}</span>
        </button>
      ))}
    </div>
  );
}
