import React from "react"
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login ({setCurrentUser, setLoggedin}) {
    let navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState([])
    const {username, password} = loginData

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch('/api/login',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                setLoggedin(true)
                setCurrentUser(user)
                navigate('/home')
            })
            } else{
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    return (
        <div className = "text-lg mt-48 flex flex-col justify-center text-center">
            <div>
                <form onSubmit = {handleSubmit}>
                    <div className = "text-primary">
                        <h1>LOG IN</h1>
                    </div>
                    <div>
                        <div >
                            <span className = "line">
                                <i className = "fa-solid fa-user text-base text-warning mx-4"></i>
                                <input
                                    type = "text"
                                    name = "username"
                                    value = {username}
                                    placeholder = "enter username"
                                    onChange = {handleChange}
                                />
                            </span>
                        </div>
                        <div>
                            <span className = "line">
                                <i className = "fa-solid fa-lock text-base text-warning mx-4"></i>
                                <input
                                    type = "password"
                                    name = "password"
                                    value = {password}
                                    placeholder = "enter password"
                                    onChange = {handleChange}
                                />
                            </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white hover:text-white w-48 bg-base-200 hover:bg-secondary rounded-xl text-base hover:text-base px-2 mb-2 focus:outline-none">
                        Log in
                    </button>
                    <div className="grid">
                        {errors? <div className = "error-message text-base text-warning-content place-self-center px-5 mt-4 glass animate-bounce">
                            <p>{errors}</p>
                        </div> : null}
                    </div>
                    <p className = "text-primary hover:text-base-300 cursor-pointer" onClick = {()=> navigate("/signup")}>
                        Ahhh, I need an account.
                        <span className = "text-warning"> SIGN ME UP </span>
                        !
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;
