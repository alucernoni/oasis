import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import {Button, Stack} from '@chakra-ui/react'
import PlantAddForm from './PlantAddForm'

function NavBar({user, setUser}) {

    const navigate = useNavigate()

    const handleLogOut = () => {
      fetch('/logout', {
        method: "DELETE",
      })
      setUser(null)
        navigate('/')
    }

  return (
    <header>
        <nav>
            <Stack direction="row">
                <NavLink to="/homepage">Home</NavLink>
                <PlantAddForm/>
                <NavLink to="/profile">Profile</NavLink>
                {user ? <Button onClick={handleLogOut} >Log Out</Button> : null}
            </Stack>
        </nav>
    </header>
  )
}

export default NavBar