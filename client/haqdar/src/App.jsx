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
import { toast } from "sonner";
import SavedSchemesPage from "./Components/SavedScheme/SavedSchemesPage.jsx";
import MatchedSchemes from "./Pages/MatchedSchemes.jsx";
import FeedbackForm from "./Components/FeedBackForm/FeedbackForm.jsx";
import TermsOfService from "./Components/Footer/TermsOfService.jsx";
import AdminLogin from "./Pages/AdminPage/AdminLogin.jsx";
import PrivacyPolicy from "./Components/Footer/PrivacyPolicy.jsx";
import AdminDash from "./Pages/AdminPage/AdminDashboard.jsx";
import AdminFeedBack from "./Pages/AdminPage/FeedBackDash.jsx";
import SchemeManagement from "./Pages/AdminPage/SchemeManagement.jsx";
import RegisterScheme from "./Pages/AdminPage/RegisterScheme.jsx";
import AdminProtectedRoute from "./Admin/Security/AdminProtectedRoute.jsx";
import "./Components/Common/SweetAlert.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        if (data?.success) {
          setProfileData(data);
        } else {
          toast.error(data?.message || "Failed to load your profile.");
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Something went wrong. Please try again.",
        );
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
        <Route
          path="/"
          element={
            profileData ? (
              <Navigate to="/home-page" replace />
            ) : (
              <HomePage theme={theme} setTheme={setTheme} />
            )
          }
        />
        <Route
          path="/login"
          element={<AuthLogin setProfileData={setProfileData} />}
        />
        <Route path="/register" element={<AuthRegister />} />
        <Route
          path="/home-page"
          element={
            <ProtectedRoute>
              <HomeDash
                profileData={profileData}
                loading={loading}
                theme={theme}
                setTheme={setTheme}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/complete-profile"
          element={
            <ProtectedRoute>
              <ProfileWizard
                profileData={profileData}
                setProfileData={setProfileData}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <ProfilePage theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/top-matched-Schemes"
          element={
            <MatchedSchemes
              theme={theme}
              setTheme={setTheme}
              profileData={profileData}
            />
          }
        />
        <Route
          path="/saved-schemes"
          element={
            <SavedSchemesPage
              profileData={profileData}
              theme={theme}
              setTheme={setTheme}
            />
          }
        />
        <Route path="/submit-feedBack" element={<FeedbackForm />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDash />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin-feedback"
          element={
            <AdminProtectedRoute>
              <AdminFeedBack />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin-scheme"
          element={
            <AdminProtectedRoute>
              <SchemeManagement />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/add-scheme"
          element={
            <AdminProtectedRoute>
              <RegisterScheme />
            </AdminProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
