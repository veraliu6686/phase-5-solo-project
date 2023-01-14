import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import Hello from './Hello';
import Home from './Home';
import DiaryMain from './DiaryMain.jsx';
import PetPen from './PetPen'
import Login from './Login';
import Signup from './Signup';

function App() {
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
  console.log(currentUser)

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
