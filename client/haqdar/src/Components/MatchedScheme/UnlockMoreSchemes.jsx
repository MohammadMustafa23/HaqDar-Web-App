import { UserRoundCheck } from "lucide-react";
// import { useNavigate } from "react-router-dom";

export default function UnlockMoreSchemes() {
  // const navigate = useNavigate();
  const handleUpdateProfile = () => {
   console.log("Update pRofile");
  };
  

  return (
    <section className="ums-container">
      <div className="ums-content">
        <h3 className="ums-title">Missing some schemes?</h3>

        <p className="ums-description">
          Complete your profile details to unlock more matches in Health and
          Pension categories. It only takes 2 minutes.
        </p>

        <button className="ums-btn" onClick={handleUpdateProfile} >Update Profile</button>
      </div>

      <div className="ums-icon-wrapper">
        <UserRoundCheck size={52} className="ums-icon" />
      </div>
    </section>
  );
}
