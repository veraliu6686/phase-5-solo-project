import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { themeChange } from 'theme-change'
import Nav from './Nav'
import Hello from './Hello';
import Home from './Home';
import DiaryMain from './DiaryMain.jsx';
import PetPen from './PetPen';
import Login from './Login';
import Signup from './Signup';
import Community from './Community';
import UserDetail from './UserDetail';
import UserProfile from './UserProfile';

function App() {
  useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
  }, [])

  const [currentUser, setCurrentUser] = useState(false)
  const [loggedin, setLoggedin] = useState(false)
  const [updateFollow, setUpdateFollow] = useState(false)
  const [pets, setPets] = useState ( [] )
  const [diaries, setDiaries] = useState ( [] )
  const [users, setUsers] =useState ( [] )

  useEffect(() => {
    fetch("/api/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setLoggedin(true)
          setCurrentUser(user)
        });
      }
    })
  },[])

  useEffect (()=>{
      fetch("/api/pets")
      .then(res => res.json())
      .then (setPets)
  }, [currentUser])

  useEffect (()=>{
      fetch("/api/diaries")
      .then(res => res.json())
      .then (setDiaries)
  }, [currentUser])

  useEffect(()=>{
      fetch("/api/users")
      .then(res => res.json())
      .then (setUsers)
  },[updateFollow])

  return (
    <div>
      <div className = "dropdown absolute top-0 right-0 z-20">
        <label tabIndex = {0}  htmlFor = "underline_select" className = "sr-only">Color Theme</label>
        <select data-choose-theme tabIndex = {0} id = "underline_select" className = "block mx-8 text-center text-[1.5rem] text-primary bg-transparent border-b-2 border-accent appearance-none ">
          <option value = "aqua">Aqua</option>
          <option value = "dark">Dark</option>
          <option value = "dracula">Dracula</option>
          <option value = "garden">Garden</option>
          <option value = "retro">Retro</option>
          <option value = "valentine">Valentine</option>
        </select>
      </div>

      { loggedin && currentUser ? <Nav currentUser = {currentUser} setCurrentUser = {setCurrentUser}/> : null}
      <Routes>
        <Route path = "/" element = {<Hello />}></Route>
        <Route path = "login" element = {<Login setCurrentUser = {setCurrentUser} setLoggedin={setLoggedin}/>}></Route>
        <Route path = "signup" element = {<Signup setCurrentUser = {setCurrentUser} setLoggedin={setLoggedin} />}></Route>
        {loggedin &&
        <>
          <Route path = "home" element = {<Home pets = {pets} currentUser = {currentUser}/>}></Route>
          <Route path = "community" element = {<Community pets = {pets} diaries={diaries}/>}></Route>
          <Route path = "users/:name" element = {<UserDetail users={users} currentUser = {currentUser} setUpdateFollow={setUpdateFollow}/>}></Route>
          <Route path = "profile/:name" element = {<UserProfile currentUser = {currentUser}/>}></Route>
          <Route path = "memo" element = {<DiaryMain currentUser = {currentUser}/>}></Route>
          <Route path = "pets" element = {<PetPen currentUser = {currentUser}/>}></Route>
        </>}
      </Routes>

    </div>
  )
}

export default App;
