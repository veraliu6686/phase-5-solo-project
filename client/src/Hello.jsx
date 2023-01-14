import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "./assets/petMemo_logo.png"

function Hello(){
    return (
        <div >
            <div>
                < img id = "lg-logo"src = {Logo} alt = "logo"/>
            </div>
            <div className = "center-con">
                <h1> Welcome to petMemo!!!</h1>
                <div className = "center-div">
                    <NavLink to = "/signup" className = "nav-item"> Sign Up here</NavLink>
                    <NavLink to = "/login" className = "nav-item"> Yo! Log In!</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Hello
