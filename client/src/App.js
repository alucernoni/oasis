import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import MyPlantsPage from './Pages/MyPlantsPage';
import Wishlist from './Pages/Wishlist';


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route exact path= "/" element= {<LoginPage setUserLogin={setUser}/>}/>
        <Route path= "/signup" element= {<SignupPage setUserSignup={setUser} />} />
        <Route path= "/homepage" element= {<HomePage/>}/>
      </Routes>
    </>
  )
  
    return (
      <div className="App">
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/profile" element={<ProfilePage user={user} setUser={setUser}/>} />
          <Route path= "/myplants" element= {<MyPlantsPage user={user}/>} />
          <Route path= "/wishlist" element= {<Wishlist user={user}/>} />
        </Routes>
        <h1>App render</h1>
      </div>
    );
  }
  
  export default App;
