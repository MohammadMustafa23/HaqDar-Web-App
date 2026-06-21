// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { AuthLogin, AuthRegister } from "./Pages/AuthPage";
import HomeDash from "./Pages/HomeDash";
import ProfileWizard from "./Components/Eligible-questions/ProfileWizard";
import ProtectedRoute from "./security/ProtectedRoute";
import ProfilePage from "./Pages/ProfilePage";
import { getCurrentUser } from "./Services/auttantication.service.js";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import SavedSchemesPage from "./Components/SavedScheme/SavedSchemesPage.jsx";
function App() {
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
  return (
    <>
      <Toaster
        position="top-right"
        richColors
        closeButton
        expand={true}
        duration={4000}
        toastOptions={{
          style: {
            borderRadius: "12px",
            fontSize: "14px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<AuthLogin setProfileData={setProfileData} />}
        />
        <Route path="/register" element={<AuthRegister />} />
        <Route
          path="/home-page"
          element={
            <ProtectedRoute>
              <HomeDash profileData={profileData} loading={loading} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/complete-profile"
          element={
            <ProtectedRoute>
              {profileData?.profileCompleted ? (
                <Navigate to="/home-page" replace />
              ) : (
                <ProfileWizard
                  profileData={profileData}
                  setProfileData={setProfileData}
                />
              )}
            </ProtectedRoute>
          }
        />

        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route path="/saved-schemes" element={<SavedSchemesPage />} />
      </Routes>
    </>
  );
}

export default App;
