import { useState, useEffect } from "react";
import Sidebar from "../Components/ProfileSection/Sidebar";
import ProfileHeader from "../Components/ProfileSection/ProfileHeader";
import PersonalInfo from "../Components/ProfileSection/PersonalInfo";
import EligibilityDetails from "../Components/ProfileSection/EligibilityDetails";
import AIHelpCard from "../Components/ProfileSection/AIHelpCard";
import ProfileNavBar from "../Components/ProfileSection/ProfileNavBar";
import PageLoader from "../Components/Common/PageLoader";
import { getCurrentUser } from "../Services/auttantication.service";
import "../Components/ProfileSection/Profile.css";

export default function ProfilePage({ theme, setTheme }) {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        if (data?.success) {
          setProfileData(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <PageLoader text="Loading your profile..." />;
  }

  return (
    <div className="hd-profile-page">
      <div className="hd-profile-container">
        <ProfileNavBar
          profileData={profileData.user}
          theme={theme}
          setTheme={setTheme}
        />

        <div className="hd-profile-left-section">
          <Sidebar
            theme={theme}
            setTheme={setTheme}
          />
          <AIHelpCard />
        </div>

        <div className="hd-profile-right-section">
          <ProfileHeader
            user={profileData.user}
            profile={profileData.profile}
          />

          <div className="hd-profile-info-grid">
            <PersonalInfo
              user={profileData.user}
              profile={profileData.profile}
            />

            <EligibilityDetails
              profile={profileData.profile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}