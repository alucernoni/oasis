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
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary } from "@cloudinary/url-gen";
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

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'oasiscloud'
    }
  });


  // cloud_name: "oasiscloud"
  // api_key: "181934539793869"
  // api_secret: "-FDlkl8JnyWYug9LbuEieUPqP_A"
  // secure: true

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image('sample');

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // const plantTasksLoop = () => {
  //   setTimeout(() => console.log("ping"), 1000)
  // }
  // plantTasksLoop()

  // const setTimeOutAsync = async(ms) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(resolve, ms)
  //   })
  // }

  // const plantTaskLoopHelper = async() => {
  //   while (true) {
  //     // setTimeout(() => console.log("ping"), 1000)
  //     await setTimeOutAsync(5000)
  //     console.log('ping2')
  //   }
  // }

  // plantTaskLoopHelper()

  if (!user) return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route exact path= "/" element= {<LoginPage setUserLogin={setUser}/>}/>
        <Route exact path= "/signup" element= {<SignupPage setUserSignup={setUser} />} />
        <Route exact path= "/homepage" element= {<HomePage/>}/>
      </Routes>
    </>
  )
  
    return (
      <div className="App">
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/homepage" element={<HomePage/>}/>
          <Route exact path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
          <Route exact path= "/myplants" element= {<MyPlantsPage user={user}/>} />
          <Route exact path= "/wishlist" element= {<Wishlist user={user}/>} />
        </Routes>
        <h1>App render</h1>
      </div>
    );
  }
  
  export default App;
