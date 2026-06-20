import CompleteProfile from "../Components/Home-DashBoard/CompleleProfile";
import CountSchemes from "../Components/Home-DashBoard/CountSchemes";
import NavBar from "../Components/Home-DashBoard/NavBar";
import Footer from "../Components/Footer/Footer";
import Recommended from "../Components/Home-DashBoard/Recommended";
import "../Components/Home-DashBoard/HomeDashBoard.css";
import AfterCompleteProfile from "../Components/Home-DashBoard/AfterCompleteProfile";
import OpenSchemes from "./OpenSchemes.jsx";

import { useState, useEffect } from "react";
import { getMatchedSchemes } from "../Services/recommendation.service.js";

export default function HomeDash({ profileData,loading }) {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [open, setOpen] = useState(false);

  const [schemes, setSchemes] = useState([]);
  const [schemeLoading, setSchemeLoading] = useState(true);

  const profileCompleted = profileData?.profileCompleted;
  const user = profileData?.user;

  const handleOpenScheme = (scheme) => {
    setSelectedScheme(scheme);
    setOpen(true);
  };

  useEffect(() => {
    if (!profileCompleted) return;
    const fetchSchemes = async () => {
      try {
        const data = await getMatchedSchemes();
        if (data.success) {
          setSchemes(data.schemes);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSchemeLoading(false);
      }
    };

    fetchSchemes();
  }, [profileCompleted]);
  if (loading) {
  return (
    <div className="auth-loading">
      <div className="auth-spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

  return (
    <>
      <NavBar profileData={user} />

      <div className="center">
        {profileCompleted ? <AfterCompleteProfile /> : <CompleteProfile />}

        <CountSchemes />

        <Recommended
          recommendations={schemes}
          loading={schemeLoading}
          onViewDetails={handleOpenScheme}
        />
      </div>

      {open && (
        <OpenSchemes scheme={selectedScheme} onClose={() => setOpen(false)} />
      )}
      <Footer />
    </>
  );
}
