import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserPlantCard from '../Components/UserPlantCard'
import {Center, Text} from '@chakra-ui/react'

function MyPlantsPage({user}) {


    console.log("userplants?", user.plants)
    const userPlantsDisplay = user.plants.map((plant) => <UserPlantCard key={plant.id} plant={plant}/>)


  return (
    <div className='outerprofilediv'>
    <div className='profilediv'>
    <Center flexDirection='column' pb="60px" >
        <Text fontSize='4xl' color="tomato" fontWeight={500} pt=" 20px" pb="20px" >
            {user.first_name}'s Plants
        </Text>
    {userPlantsDisplay}
    </Center>
    </div>
    </div>
  )
}

export default MyPlantsPage