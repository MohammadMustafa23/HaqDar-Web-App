import CompleteProfile from "../Components/Home-DashBoard/CompleleProfile";
import CountSchemes from "../Components/Home-DashBoard/CountSchemes";
import NavBar from "../Components/Home-DashBoard/NavBar";
import Footer from "../Components/Footer/Footer";
import Recommended from "../Components/Home-DashBoard/Recommended";
import "../Components/Home-DashBoard/HomeDashBoard.css";
import AfterCompleteProfile from "../Components/Home-DashBoard/AfterCompleteProfile";
import { useState, useEffect } from "react";
import { getCurrentUser } from "../Services/auttantication.service.js";

export default function HomeDash() {
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getCurrentUser();
      if (data) {
        setProfileCompleted(data.profileCompleted);
        console.log(data);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);
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
      <NavBar/>
      <div className="center">
        {profileCompleted ? <AfterCompleteProfile /> : <CompleteProfile />}
        <CountSchemes />
        <Recommended />
      </div>

      <Footer />
    </>
  );
}
