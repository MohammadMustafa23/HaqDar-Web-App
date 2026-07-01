import { Calendar, ShieldCheck, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { requestProfileEdit } from "../../Services/recommendation.service";
import { toast } from "sonner";
import { useState } from "react";
import PageLoader from "../Common/PageLoader";
export default function ProfileHeader({ user, profile }) {
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

  if (loading) {
    <PageLoader text="Preparing Profile Editor..." />;
  }

  const memberSince = profile?.createdAt
    ? new Date(profile.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Complete Profile";
  return (
    <div className="hd-profile-header">
      <div className="hd-profile-header-left">
        <div className="hd-profile-image">
          <User size={28} />
        </div>

        <div>
          <h1>{user.userName}</h1>

          <p>
            <Calendar size={15} />
            Member since {memberSince}
          </p>

          <div className="hd-profile-badge-container">
            <span className="hd-profile-badge">
              <ShieldCheck size={14} />
              Identity Verified
            </span>

            <span className="hd-profile-badge">Farm hd-profile-badgeer</span>
          </div>
        </div>
      </div>

      <button className="hd-profile-edit-btn" onClick={handleUpdateProfile}>
        Edit Profile
      </button>
    </div>
  );
}
