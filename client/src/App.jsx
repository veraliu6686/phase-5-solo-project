import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import Hello from './Hello';
import Home from './Home';
import DiaryMain from './DiaryMain.jsx';
import PetPen from './PetPen'
import Login from './Login';
import Signup from './Signup';
import { themeChange } from 'theme-change'

function App() {
  useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
  }, [])

  const [currentUser, setCurrentUser] = useState(false)
  const [ pets, setPets] = useState ( [] )
  const [ diaries, setDiaries] = useState ( [] )

  const updateUser = (user) => setCurrentUser(user)

  useEffect(() => {
    fetch("/api/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
        });
      }
    })
  },[])
  // console.log(currentUser)

  useEffect (()=>{
      fetch("api/pets")
      .then(res => res.json())
      .then (setPets)
  }, [])

  useEffect (()=>{
      fetch("api/diaries")
      .then(res => res.json())
      .then (setDiaries)
  }, [])

  return (
    <div>
      <div className = "dropdown dropdown-right">
        <label tabIndex = {0}  htmlFor = "underline_select" className = "sr-only">Color Theme</label>
        <select data-choose-theme tabIndex = {0} id = "underline_select" className = "block py-2.5 px-2 mx-8 text-center text-base text-primary bg-transparent border-0 border-b-2 border-accent appearance-none ">
          <option value = "aqua">Aqua</option>
          <option value = "dark">Dark</option>
          <option value = "dracula">Dracula</option>
          <option value = "garden">Garden</option>
          <option value = "retro">Rretro</option>
          <option value = "valentine">Valentine</option>
        </select>
      </div>
      { currentUser ? <Nav updateUser = {updateUser}/> : <></>}
      <Routes>
        <Route exact path = "/" element = {<Hello />}></Route>
        <Route exact path = "/home" element = {<Home pets = {pets} />}></Route>
        <Route path = "/login" element = {<Login updateUser = {updateUser} />}></Route>
        <Route path = "/signup" element = {<Signup updateUser = {updateUser} />}></Route>
        <Route path = "/memo" element = {<DiaryMain pets = {pets} diaries = {diaries} setDiaries = {setDiaries} currentUser = {currentUser}/>}></Route>
        <Route path = "/pets" element = {<PetPen pets = {pets} setPets = {setPets} currentUser = {currentUser}/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
