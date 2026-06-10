import '../App.css'
import NavBar from '../Components/Header/NavBar'
import HeroSection from '../Components/Header/HeroSection'
import HowWork from '../Components/Header/HowWork'
import TopSchemes from '../Components/Main/TopSchemes'
import Review from '../Components/Footer/Review'
import FAQ from '../Components/Footer/FAQ'
import Footer from '../Components/Footer/Footer'
function HomePage() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <HowWork/>
      <TopSchemes/>
      <Review/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default HomePage;
