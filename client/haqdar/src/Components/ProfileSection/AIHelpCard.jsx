import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

import ConfirmationModal from "../../Components/Common/ConfirmationModal.jsx";
import { LoginOutUser } from "../../Services/auttantication.service.js"; // Update path

export default function AIHelpCard() {
  const navigate = useNavigate();

  const [logoutModal, setLogoutModal] = useState(false);

  const logoutUser = async () => {
    try {
      const res = await LoginOutUser();
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Logout Failed");
    }
  };

  return (
    <>
      <div className="hd-profile-ai-card">
        <button onClick={() => setLogoutModal(true)}>
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <ConfirmationModal
        open={logoutModal}
        type="warning"
        title="Logout"
        message="Are you sure you want to logout from your account?"
        confirmText="Logout"
        cancelText="Cancel"
        onCancel={() => setLogoutModal(false)}
        onConfirm={async () => {
          setLogoutModal(false);
          await logoutUser();
        }}
      />
    </>
  );
}