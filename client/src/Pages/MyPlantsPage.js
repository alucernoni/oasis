import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserPlantCard from '../Components/UserPlantCard'
import {Center, Text} from '@chakra-ui/react'

function MyPlantsPage({user}) {


    console.log("userplants?", user.plants)
    const userPlantsDisplay = user.plants.map((plant) => <UserPlantCard key={plant.id} plant={plant}/>)


  return (
    <Center flexDirection='column'>
        <Text fontSize='4xl' color="tomato">
            {user.first_name}'s Plants
        </Text>
    {userPlantsDisplay}
    </Center>
  )
}

export default MyPlantsPage