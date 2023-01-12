import React from "react"
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login ({updateUser}) {
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
                updateUser(user)
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
        <div className = "con">
            <form onSubmit = {handleSubmit} className = "form">
                <div className = "title">
                    <h1>LOG IN</h1>
                </div>
                <div className = "input-box">
                    <div className = "input-div">
                        <span className = "line">
                            <i className = "fa-solid fa-user fa-lg"></i>
                            <input
                                type = "text"
                                name = "username"
                                value = {username}
                                placeholder = "enter username"
                                onChange = {handleChange}
                            />
                        </span>
                    </div>
                    <div className = "input-div">
                        <span className = "line">
                            <i className = "fa-solid fa-lock fa-lg"></i>
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
                <div className = "submit-btn">
                    <button type = "submit"> Login</button>
                </div>
                <p className = "link-btn" onClick = {()=> navigate("/signup")}>
                    Ahhh, I need an account.
                    <span className = "highlight-text"> SIGN ME UP </span>
                    !
                </p>
                {errors? <div className = "error-message">{errors}</div>: null}
            </form>
        </div>
    )
}

export default Login;
