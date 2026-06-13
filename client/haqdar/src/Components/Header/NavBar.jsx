import './NavBar.css'
import { useNavigate } from 'react-router-dom'
export default function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="nav-head">
           <div className="logo-section">
            <div className="logo-box">H</div>
            <h1 className="logo-text">HaqDar</h1>
            </div>

            <div className="nav-links" >
                <a>Home</a>
                <a>Schemes</a>
                <a>How its Work</a>
                <a>FAQ</a>
            </div>

            <button className="sign-up-btn"  onClick={()=>{navigate('/login')}} >Check Eliglibility</button>

        </div>
    )
}