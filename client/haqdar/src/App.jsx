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
import MatchedSchemes from "./Pages/MatchedSchemes.jsx";
import FeedbackForm from "./Components/FeedBackForm/FeedbackForm.jsx";
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
          element={<SavedSchemesPage profileData={profileData}  theme={theme} setTheme={setTheme} />}
        />

        <Route
          path="/submit-feedBack"
          element={<FeedbackForm/>}
        />
      </Routes>
    </>
  );
}

export default App;
