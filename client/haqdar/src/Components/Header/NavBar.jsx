import './NavBar.css'
import { useNavigate } from 'react-router-dom'
export default function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="nav-head">
            <h2 className="nav-logo">HaqDar</h2>

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