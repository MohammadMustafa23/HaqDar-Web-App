// App.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import { AuthLogin,AuthRegister } from "./Pages/AuthPage";
import HomeDash from "./Pages/HomeDash";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/register" element={<AuthRegister />} />
      <Route path="/home-page" element={<HomeDash/>}/>
    </Routes>
  );
}

export default App;