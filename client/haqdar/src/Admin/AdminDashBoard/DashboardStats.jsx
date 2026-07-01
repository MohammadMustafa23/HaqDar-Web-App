import "./AdminDashComp.css";

import {
  FolderKanban,
  FileText,
  Users,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats({stats}) {

  const adsStats = [

    {
      title: "Active Schemes",
      value: stats?.activeSchemes,
      subtitle: "Currently Available",
      icon: <FolderKanban size={30} />,
    },

    {
      title: "Total Schemes",
      value: stats?.totalSchemes,
      subtitle: "Stored in Database",
      icon: <FileText size={30} />,
    },

    {
      title: "Registered Users",
      value: stats?.totalUsers,
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
          stats={stats}
        />

      ))}

    </section>

  );

}