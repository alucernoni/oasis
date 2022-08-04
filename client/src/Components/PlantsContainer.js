import React, {useEffect} from 'react'
import PlantCard from './PlantCard'
import { fetchPlants } from '../Components/PlantsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Stack, Text} from '@chakra-ui/react'
import "../index.css"



function PlantsContainer() {

    const plantsArray = useSelector((state) => state.plants.entities)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlants())
    }, [dispatch])

    // console.log("plants?", plantsArray)

    const allPlantsDisplay = plantsArray.length > 0 ? plantsArray.map((plant) => <PlantCard key={plant.id} plant={plant}/>) : null

    // const shadePlantsDisplay = plantsArray.length > 0 ? plantsArray.map((plant) => {
    //   if (plant.plant_tolerates.low_light === true) <PlantCard key={plant.id} plant={plant}/>
    // }) : null

    // const shadePlantsDisplay = plantsArray.length > 0 ? plantsArray.filter((plant) => {
    //   if (plant.plant_tolerates.map((tolerance_option) => tolerance_option[0].low_light === true) ) { 
    //   return <PlantCard key = {plant.id} plant={plant}/> 
    // }} ) : null

    // const shadePlantsDisplay = plantsArray.length > 0 ? plantsArray.filter((plant) => plant.plant_tolerates.some((element) => element.low_light) ) : null
    const shadePlants= plantsArray?.filter((plant) => plant.plant_tolerates.some((element) => element.low_light) ) 
    const shadePlantsDisplay = shadePlants.map((plant) => <PlantCard key={plant.id} plant= {plant} /> )

    const droughtPlants = plantsArray?.filter((plant) => plant.plant_tolerates.some((el) => el.drought))
    const droughtPlantsDisplay = droughtPlants.map((plant) => <PlantCard key={plant.id} plant= {plant} /> )



    console.log("shadeplants display?", shadePlantsDisplay)

    console.log("plants array", JSON.stringify(plantsArray, null, 2))

  return (
    <>
    <Stack justifyContent="center" direction="row" mt="30px">
      <Text className='font_color' as="h1" fontSize="40px" >Top Beginner Plants</Text>
    </Stack>
    <Stack direction="row" pb="10px" mt="10px" mb="20px" className='cardContainer'>
        PlantsContainer
        {allPlantsDisplay}
    </Stack>
    <Stack justifyContent="center" direction="row" mt="30px">
      <Text className='font_color' as="h1" fontSize="40px" >Best Plants for Low Light Areas</Text>
    </Stack>
    <Stack direction="row" mt="20px" className='cardContainer'>
      {shadePlantsDisplay}
    </Stack>
    <Stack justifyContent="center" direction="row" mt="30px">
      <Text className='font_color' as="h1" fontSize="40px" >Plants for the Forgetful Waterer</Text>
    </Stack>
    <Stack direction='row' mt="20px" className='cardContainer'>
      {droughtPlantsDisplay}
    </Stack>
    </>
  )
}

export default PlantsContainer