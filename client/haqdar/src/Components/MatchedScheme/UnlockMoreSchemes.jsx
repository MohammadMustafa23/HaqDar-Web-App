import { UserRoundCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { requestProfileEdit } from "../../Services/recommendation.service";
import { toast } from "sonner";
import { useState } from "react";
import PageLoader from '../Common/PageLoader'

export default function UnlockMoreSchemes() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async () => {
    if (loading) return;

    try {
      setLoading(true);
      const response = await requestProfileEdit();
      if (response.success) {
        toast.success(response.message);
        navigate("/complete-profile", {
          replace: true,
        });
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if(loading) {
    <PageLoader text="Preparing Profile Editor..." />
  }
     

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
