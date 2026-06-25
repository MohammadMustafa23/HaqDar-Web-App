import { UserRoundCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { requestProfileEdit } from "../../Services/recommendation.service";
import { toast } from "sonner";

export default function UnlockMoreSchemes() {
  const navigate = useNavigate();
  const handleUpdateProfile = async () => {
    try {
      const response = await requestProfileEdit();
      if (response.success) {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/complete-profile");
        }, 1000);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="ums-container">
      <div className="ums-content">
        <h3 className="ums-title">Missing some schemes?</h3>

        <p className="ums-description">
          Complete your profile details to unlock more matches in Health and
          Pension categories. It only takes 2 minutes.
        </p>

        <button className="ums-btn" onClick={handleUpdateProfile}>
          Update Profile
        </button>
      </div>

      <div className="ums-icon-wrapper">
        <UserRoundCheck size={52} className="ums-icon" />
      </div>
    </section>
  );
}
