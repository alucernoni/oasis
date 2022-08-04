import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import {Button, Flex, Stack, Image} from '@chakra-ui/react'
import PlantAddForm from './PlantAddForm'
import '../index.css'


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
        <Flex as="header" width= "100%" justifyContent="space-around" backgroundColor="rgb(146,211,205)" paddingBottom={4} paddingTop={4} >
            <Stack direction="row" w="50%" alignItems="center" justifyContent="left" spacing={5} ml={15}>
                <NavLink id="home_link" to="/homepage">OASIS</NavLink>
                <PlantAddForm/>
            </Stack>
            <Stack direction="row" w="50%" alignItems="center" justifyContent="right" spacing={5} mr={15}>
                <NavLink to="/profile">
                  <Image
                    src='https://res.cloudinary.com/oasiscloud/image/upload/v1659636922/AddPlantIcon_1_copy_xyx6vs.png'
                    alt='Profile'
                    height= "45px"
                    borderRadius="full"
                  />
                </NavLink>
                {user ? <Button onClick={handleLogOut} >Log Out</Button> : null}
            </Stack>
        </Flex>
        </nav>
    </header>
  )
}

export default NavBar