// App.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import { AuthLogin,AuthRegister } from "./Pages/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/register" element={<AuthRegister />} />
    </Routes>
  );
}

export default App;