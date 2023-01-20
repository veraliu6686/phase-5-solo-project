import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Logo from "./assets/petMemo_logo_ch.png"

function Nav ({setCurrentUser}) {
    let navigate = useNavigate()

    const handleLogOut = () => {
        fetch(`/api/logout`, {
        method:"DELETE"
        })
        .then(res =>{
        if(res.ok){
            setCurrentUser(false)
            navigate("/login")
        }
        })
    }

    return (
        <nav className="navbar py-1 px-2 sm:px-4 w-full left-0 drop-shadow-xl pt-8" >
            <div className="w-1/3">
                {/* hamburgr shows when screen smalled */}
                <div className="dropdown ">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to = "/home" className="text-base">Home</NavLink></li>
                    <li><NavLink to = "/community" className="text-base">Community</NavLink></li>
                    <li><NavLink to = "/memo" className="text-base">My Memo</NavLink></li>
                    <li><NavLink to = "/pets" className="text-base">My Pets</NavLink></li>
                </ul>
                </div>
            </div>
            <div className=" md:w-2/3 w-full"><img src = {Logo} alt = "logo"/></div>
            <div className="w-1/6"></div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to = "/home">Home</NavLink></li>
                    <li><NavLink to = "/community" className="text-base">Community</NavLink></li>
                    <li><NavLink to = "/memo">My Memo</NavLink></li>
                    <li><NavLink to = "/pets">My Pets</NavLink></li>
                </ul>
            </div>
            {/* user avatar with personal settings */}
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar mx-4">
                    <div className="rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content text-base bg-base-100 rounded-box w-45">
                    <li><a className="justify-between text-base">Profile</a></li>
                    <li><a className="text-base">Messages<span className="badge">New</span></a></li>
                    <li onClick = {handleLogOut}><a className="text-base">Log out<i className="fa-solid fa-right-from-bracket text-[1.1rem]"></i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
