import {
  Search,
  BadgeCheck,
  FileText,
  GraduationCap,
  Tractor,
  HelpCircle,
} from "lucide-react";
import './AiSidebar.css'

export default function QuickActions({ onSelect }) {
  const actions = [
    {
      icon: <Search size={16} />,
      label: "Find Schemes",
    },
    {
      icon: <BadgeCheck size={16} />,
      label: "Check Eligibility",
    },
    {
      icon: <FileText size={16} />,
      label: "Required Documents",
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
      icon: <HelpCircle size={16} />,
      label: "How To Use HaqDar",
    },
  ];

  return (
    <div className="quick-actions">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => onSelect(action.label)}
        >
          {action.icon}
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
}