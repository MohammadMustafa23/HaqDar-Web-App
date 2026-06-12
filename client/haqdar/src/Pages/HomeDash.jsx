import CompleteProfile from "../Components/Home-DashBoard/CompleleProfile"
import CountSchemes from "../Components/Home-DashBoard/CountSchemes"
import NavBar from "../Components/Home-DashBoard/NavBar"
import Footer from '../Components/Footer/Footer'
import Recommended from "../Components/Home-DashBoard/Recommended"
import '../Components/Home-DashBoard/HomeDashBoard.css'
export default function HomeDash() {
    return (
        <>
           <NavBar/>
           <div className="center" >
               <CompleteProfile/>
               <CountSchemes/>
               <Recommended/> 
           </div>
           <Footer/>
        </>
    )
}