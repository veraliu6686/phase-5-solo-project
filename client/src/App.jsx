import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import Home from './Home';
import DiaryMain from './DiaryMain.jsx';
import PetPen from './PetPen'
import Login from './Login';
import Signup from './Signup';

function App() {
  const [currentUser, setCurrentUser] = useState(false)
  
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

  return (
    <div>
      {<Nav updateUser = {updateUser}/>}
      <Routes>
        <Route exact path= "/" element= {<Home />}> </Route>
        <Route path = "/login" element = {<Login updateUser = {updateUser} />}> </Route>
        <Route path = "/signup" element = {<Signup updateUser = {updateUser} />}> </Route>
        <Route path = "/memo" element = {<DiaryMain />}> </Route>
        <Route path = "/pets" element = {<PetPen />}> </Route>
      </Routes>
    </div>
  )
}

export default App;
