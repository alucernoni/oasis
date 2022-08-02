import React, {useEffect} from 'react'
import PlantCard from './PlantCard'
import { fetchPlants } from '../Components/PlantsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Stack } from '@chakra-ui/react'



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


    console.log("shadeplants display?", shadePlantsDisplay)

    console.log("plants array", JSON.stringify(plantsArray, null, 2))

  return (
    <>
    <Stack direction="row">
        PlantsContainer
        {allPlantsDisplay}
    </Stack>
    <Stack direction="row">
      <h1>Shade Plants</h1>
      {shadePlantsDisplay}
    </Stack>
    </>
  )
}

export default PlantsContainer