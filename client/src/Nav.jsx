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
        <nav className="navbar py-1 px-2 sm:px-4 w-full z-20 left-0 drop-shadow-xl" >
            <div className="navbar-start">
                {/* hamburgr shows when screen smalled */}
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to = "/home" className="text-base">Home</NavLink></li>
                    <li><NavLink to = "/memo" className="text-base">Diaries</NavLink></li>
                    <li><NavLink to = "/pets" className="text-base">Pets</NavLink></li>
                    {/* dropdown options */}
                    <li tabIndex={0}>
                    <a className="justify-between text-base">
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul className="p-2">
                        <li><a className="text-base">Submenu 1</a></li>
                        <li><a className="text-base">Submenu 2</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            <div><img src = {Logo} alt = "logo"/></div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to = "/home">Home</NavLink></li>
                    <li><NavLink to = "/memo">Diaries</NavLink></li>
                    <li><NavLink to = "/pets">Pets</NavLink></li>
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
                    <li><a className="text-base">Massages<span className="badge">New</span></a></li>
                    <li><a className="text-base">Logout<i className="fa-solid fa-right-from-bracket mb-2.5" onClick = {handleLogOut}></i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
