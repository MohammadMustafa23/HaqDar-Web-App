// App.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { AuthLogin, AuthRegister } from "./Pages/AuthPage";
import HomeDash from "./Pages/HomeDash";
import ProfileWizard from "./Components/Eligible-questions/ProfileWizard";
import ProtectedRoute from "./security/ProtectedRoute";
import ProfilePage from "./Pages/ProfilePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/register" element={<AuthRegister />} />
      <Route
        path="/home-page"
        element={
          <ProtectedRoute>
            <HomeDash />
          </ProtectedRoute>
        }
      />
      <Route
        path="/complete-profile"
        element={
          <ProtectedRoute>
            <ProfileWizard />
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
    </Routes>
  );
}

export default App;
