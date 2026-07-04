import "../App.css";
import NavBar from "../Components/Header/NavBar";
import HeroSection from "../Components/Header/HeroSection";
import HowWork from "../Components/Header/HowWork";
import TopSchemes from "../Components/Main/TopSchemes";
import Review from "../Components/Footer/Review";
import FAQ from "../Components/Footer/FAQ";
import Footer from "../Components/Footer/Footer";
import { useRef } from "react";
function HomePage({ theme, setTheme }) {
  console.log("Home Page Loaded");

  const schemesRef = useRef(null);
  const howWorkRef = useRef(null);
  const faqRef = useRef(null);
  const homeRef = useRef(null);
  const RefObj = {
    homeRef,
    schemesRef,
    howWorkRef,
    faqRef,
  };
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div ref={homeRef}></div>
      <NavBar
        theme={theme}
        setTheme={setTheme}
        scrollToSection={scrollToSection}
        RefObj={RefObj}
      />
      <HeroSection />
      <HowWork howWorkRef={howWorkRef} />
      <TopSchemes schemesRef={schemesRef} />
      <Review />
      <FAQ faqRef={faqRef} />
      <Footer />
    </>
  );
}

export default HomePage;
