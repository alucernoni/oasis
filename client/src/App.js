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
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<LoginPage setUserLogin={setUser}/>}/>
        <Route path= "/signup" element={<SignupPage/>} />
      </Routes>
    </>
  )
  
    return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/homepage" element={<HomePage/>}/>
        </Routes>
        <h1>Page Count: bullsheeit</h1>
      </div>
    );
  }
  
  export default App;
