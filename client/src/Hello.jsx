import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "./assets/petMemo_logo.png"

function Hello(){
    return (
        <div  className="flex flex-col items-center pb-10">
            <div className="mt-20">
                < img id = "lg-logo"src = {Logo} alt = "logo"/>
            </div>
            <div >
                <h1 className="text-center"> Welcome to petMemo!!!</h1>
                <div className="flex flex-col items-center pb-10">
                    <NavLink to = "/signup" className = "text-lg hover:text-primary hover:border-2 hover:border-primary px-4 border-inherit border-dashed rounded-md"> Sign Up here</NavLink>
                    <NavLink to = "/login" className = "text-lg  hover:text-secondary hover:border-2 border-secondary px-4 border-dashed rounded-md"> Yo! Log In!</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Hello
