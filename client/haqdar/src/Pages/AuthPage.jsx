import Login from '../Components/AuthPages/Login'
import Nav from '../Components/AuthPages/Nav'
import Register from '../Components/AuthPages/Register'
export function AuthLogin({setProfileData}) {
    return (
        <div>
            <Nav/>
            <Login setProfileData={setProfileData}n/>
        </div>
    )
}

export function AuthRegister() {
      return (
        <div>
            <Nav/>
            <Register/>
        </div>
    )
}
