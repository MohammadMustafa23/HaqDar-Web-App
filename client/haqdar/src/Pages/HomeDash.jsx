import CompleteProfile from "../Components/Home-DashBoard/CompleleProfile";
import CountSchemes from "../Components/Home-DashBoard/CountSchemes";
import NavBar from "../Components/Home-DashBoard/NavBar";
import Footer from "../Components/Footer/Footer";
import Recommended from "../Components/Home-DashBoard/Recommended";
import "../Components/Home-DashBoard/HomeDashBoard.css";
import AfterCompleteProfile from "../Components/Home-DashBoard/AfterCompleteProfile";
import OpenSchemes from "./OpenSchemes.jsx";
import Review from "../Components/Footer/Review.jsx";
import FAQ from "../Components/Footer/FAQ.jsx";
import { useState, useEffect,useRef } from "react";
import HowWork from "../Components/Header/HowWork.jsx";
import PageLoader from '../Components/Common/PageLoader.jsx'
import { getMatchedSchemes } from "../Services/recommendation.service.js";

export default function HomeDash({ profileData, loading, theme, setTheme }) {
  console.log("Home Dash Loaded");
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [open, setOpen] = useState(false);

  const [schemes, setSchemes] = useState([]);
  const [schemeLoading, setSchemeLoading] = useState(true);

  const profileCompleted = profileData?.profileCompleted;
  const user = profileData?.user;
  const schemesRef = useRef(null);
  const howWorkRef = useRef(null);
  const faqRef = useRef(null);
  const homeRef = useRef(null);
  const RefObj = {
    schemesRef,
    howWorkRef,
    faqRef,
    homeRef
  }

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleOpenScheme = (scheme) => {
    setSelectedScheme(scheme);
    setOpen(true);
  };

  useEffect(() => {
    if (!profileCompleted) return;
    const fetchSchemes = async () => {
      try {
        const data = await getMatchedSchemes();
        if (data.success) {
          setSchemes(data.schemes);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSchemeLoading(false);
      }
    };

    fetchSchemes();
  }, [profileCompleted]);
  if (loading) {
    return (
      <PageLoader text="Dashboard Loading..." />
    );
  }

  return (
    <>
      <NavBar homeRef={homeRef} profileData={user} theme={theme} setTheme={setTheme}  scrollToSection={scrollToSection}  RefObj={RefObj} />

      <div className="center">
        {profileCompleted ? (
          <AfterCompleteProfile profileData={profileData} total={schemes} />
        ) : (
          <CompleteProfile />
        )}

        <CountSchemes total={schemes} />

        <Recommended
          recommendations={schemes}
          loading={schemeLoading}
          onViewDetails={handleOpenScheme}
          schemesRef={schemesRef}
        />
      </div>

      {open && (
        <OpenSchemes scheme={selectedScheme} onClose={() => setOpen(false)} />
      )}
      <HowWork howWorkRef={howWorkRef}/>
      <Review />
      <FAQ faqRef={faqRef} />

      <Footer />
    </>
  );
}
