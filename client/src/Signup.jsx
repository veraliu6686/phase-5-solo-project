import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

function Signup ({setCurrentUser, setLoggedin}) {
    let navigate = useNavigate()
    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState([])
    const {username, email, password} = signupData

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            email,
            password
        }

        fetch('/api/users',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
          })
          .then(res => {
            if (res.ok){
                res.json().then(user => {
                    setLoggedin(false)
                    setCurrentUser(user)
                    navigate('/login')
                })
            }else{
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })

        setSignupData({
            username: "",
            email: "",
            password:""
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    return (
        <div className = "text-lg mt-48 flex flex-col justify-center text-center">
            <form onSubmit = {handleSubmit} >
                <div className = "text-primary">
                    <h1>SIGN UP</h1>
                </div>
                <div>
                    <div>
                        <span className = "line">
                            <i className = "fa-solid fa-user text-base text-warning mx-4"></i>
                            <input
                                required
                                type = "text"
                                placeholder = " enter username"
                                name = "username"
                                value = {username}
                                onChange = {handleChange}
                                />
                        </span>
                    </div>
                    <div>
                        <span className = "line">
                            <i className = "fa-solid fa-envelope text-base text-warning mx-4"></i>
                            <input
                                required
                                type = "text"
                                placeholder = "enter your email"
                                name = "email"
                                value = {email}
                                onChange = {handleChange}
                            />
                        </span>
                    </div>
                    <div>
                        <span className = "line">
                        <i className = "fa-solid fa-lock text-base text-warning mx-4"></i>
                        <input
                            required
                            type = "password"
                            placeholder = " enter password"
                            name = "password"
                            value = {password}
                            onChange = {handleChange}
                        />
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="text-white hover:text-white w-48 bg-base-200 hover:bg-secondary rounded-xl text-base hover:text-base px-2 mb-2 focus:outline-none">
                        Sign me
                    </button>
                    <p className = "text-primary hover:text-base-300 cursor-pointer" onClick = {()=> navigate("/login")}>
                        Nonono, I want to go to
                        <span className = "text-warning"> LOGIN </span>
                        instead
                    </p>
                </div>
                {errors?errors.map(e => <div className = "error-message">{e[0]+': ' + e[1]}</div>) : null}
            </form>
        </div>
    )
}

export default  Signup;
