import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Logo from "./assets/petMemo_logo_ch.png"

function Nav ({updateUser}) {
    let navigate = useNavigate()

    const handleLogOut = () => {
        fetch(`/api/logout`, {
        method:"DELETE"
        })
        .then(res =>{
        if(res.ok){
            updateUser(false)
            navigate("/login")
        }
        })
    }

    return (
        <div className = "nav-bar">
            <div className = "center-div">
                < img id = "logo" src = {Logo} alt = "logo"/>
            </div>
            <div className= "nav-list">
                <NavLink to = "/home" className = "nav-item"> Home</NavLink>
                <NavLink to = "/memo" className = "nav-item"> Diaries</NavLink>
                <NavLink to = "/pets" className = "nav-item"> Pets</NavLink>
                {/* <NavLink to = "/signup" className = "nav-item"> Sign Up here</NavLink>
                <NavLink to = "/login" className = "nav-item"> Yo! Log In!</NavLink> */}
                <i id = "logout" className = "fa-solid fa-right-from-bracket" onClick = {handleLogOut}></i>
            </div>
        </div>
    )
}

export default Nav;
