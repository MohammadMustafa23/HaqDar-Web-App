import "./AdminDashComp.css";

import {
  FolderKanban,
  FileText,
  Users,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats() {

  const adsStats = [

    {
      title: "Active Schemes",
      value: "164",
      subtitle: "Currently Available",
      icon: <FolderKanban size={30} />,
    },

    {
      title: "Total Schemes",
      value: "238",
      subtitle: "Stored in Database",
      icon: <FileText size={30} />,
    },

    {
      title: "Registered Users",
      value: "12,480",
      subtitle: "Verified Accounts",
      icon: <Users size={30} />,
    },

  ];

  return (

    <section className="ads-wrapper">

      {adsStats.map((item, index) => (

        <StatCard
          key={index}
          {...item}
        />

      ))}

    </section>

  );

}