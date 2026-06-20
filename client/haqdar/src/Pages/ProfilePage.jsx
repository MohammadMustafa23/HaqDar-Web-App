import Sidebar from "../Components/ProfileSection/Sidebar";
import ProfileHeader from "../Components/ProfileSection/ProfileHeader";
import PersonalInfo from "../Components/ProfileSection/PersonalInfo";
import EligibilityDetails from "../Components/ProfileSection/EligibilityDetails";
import AIHelpCard from "../Components/ProfileSection/AIHelpCard";
import Navbar from "../Components/Home-DashBoard/NavBar";
import "../Components/ProfileSection/Profile.css";
import { useState, useEffect } from "react";
import { getCurrentUser } from "../Services/auttantication.service";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        if (data?.success) {
          setProfileData(data);
        }
        console.log(data);
        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  if (loading) {
    return (
      <div className="profile-loading">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="hd-profile-page">
      <div className="hd-profile-container">
        <Navbar profileData={profileData.user} />
        {/* LEFT */}
        <div className="hd-profile-left-section">
          <Sidebar />
          <AIHelpCard />
        </div>

        {/* RIGHT */}
        <div className="hd-profile-right-section">
          <ProfileHeader user={profileData.user} profile={profileData.profile} />

          <div className="hd-profile-info-grid">
            <PersonalInfo user={profileData.user} profile={profileData.profile}/>
            <EligibilityDetails profile={profileData.profile} />
          </div>
        </div>
      </div>
    </div>
  );
}
