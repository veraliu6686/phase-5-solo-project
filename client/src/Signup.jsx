import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

function Signup ({updateUser}) {
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
                    updateUser(user)
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
        <div className = "con">
            <form onSubmit = {handleSubmit} className = "form">
                <div className = "title">
                    <h1>SIGN UP</h1>
                </div>
                <div className = "input-box">
                    <div className = "input-div">
                        <span className = "line">
                            <i className = "fa-solid fa-user fa-lg"></i>
                            <input
                                type = "text"
                                placeholder = "enter username"
                                name = "username"
                                value = {username}
                                onChange = {handleChange}
                                />
                        </span>
                    </div>
                    <div className = "input-div">
                        <span className = "line">
                            <i className = "fa-solid fa-envelope"></i>
                            <input
                                type = "text"
                                placeholder = "enter your email"
                                name = "email"
                                value = {email}
                                onChange = {handleChange}
                            />
                        </span>
                    </div>
                    <div className = "input-div">
                        <span className = "line">
                        <i className = "fa-solid fa-lock fa-lg"></i>
                        <input
                            type = "password"
                            placeholder = 'enter password'
                            name = "password"
                            value = {password}
                            onChange = {handleChange}
                        />
                        </span>
                    </div>
                    <div className = "submit-btn">
                        <button type = "submit"> Sign Me</button>
                    </div>
                    <p className = "link-btn" onClick = {()=> navigate("/login")}>
                        Nonono, I want to go to
                        <span className = "highlight-text"> LOGIN </span>
                        instead
                    </p>
                </div>
                {errors?errors.map(e => <div className = "error-message">{e[0]+': ' + e[1]}</div>) : null}
            </form>
        </div>
    )
}

export default  Signup;
