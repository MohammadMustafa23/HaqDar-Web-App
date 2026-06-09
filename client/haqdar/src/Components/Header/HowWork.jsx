import './HowWork.css'
import { FaUser, FaSearch, FaCompass, FaGlobe } from "react-icons/fa";
export default function HowWork() {
    return (
        <div className='Work-head' >
           <h1 className='work-heading'>How it Works</h1>
           <p className='work-about' >Follow these simple steps to access the government support you deserve.</p>

            <div className="cards-row">
               <div className='card-head'>
                   <h3 className='card-num' >[01]</h3>
                    <div className="card-icon">
                      <FaUser />
                    </div>
                
                   <h2 className='card-heading'>Create Profile</h2>
                  <p className='card-about'>Enter your basic details to get started.</p>
                </div>

                <div className='card-head'>
                    <h3 className='card-num' >[02]</h3>
                     <div className="card-icon">
                       <FaSearch />
                    </div>
                
                    <h2 className='card-heading'>Check Eligibility</h2>
                    <p className='card-about'>Find schemes that match your profile.</p>
                </div>
                <div className='card-head'>
                    <h3 className='card-num' >[03]</h3>
                     <div className="card-icon">
                       <FaCompass />
                    </div>

                    <h2 className='card-heading'>Explore Schemes</h2>
                    <p className='card-about'>Review benefits, requirements, and documents.</p>
                </div>
                <div className='card-head'>
                   <h3 className='card-num' >[04]</h3>
                    <div className="card-icon">
                       <FaGlobe />
                    </div>
                
                   <h2 className='card-heading'>Access Resources</h2>
                   <p className='card-about'>Visit trusted government sources for complete info.</p>
                </div>
            </div>
        </div>
    )
}