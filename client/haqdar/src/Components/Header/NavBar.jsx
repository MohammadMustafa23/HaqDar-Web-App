import './NavBar.css'
export default function NavBar() {
    return (
        <div className="nav-head">

            <h2 className="nav-logo">HaqDar</h2>

            <div className="nav-links" >
                <a>Home</a>
                <a>Schemes</a>
                <a>How its Work</a>
                <a>FAQ</a>
            </div>

            <button className="sign-up-btn" >Check Eliglibility</button>

        </div>
    )
}