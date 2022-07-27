import React, {useEffect} from 'react'
import PlantCard from './PlantCard'
import { fetchPlants } from '../Components/PlantsSlice'
import { useSelector, useDispatch } from 'react-redux'



function PlantsContainer() {

    const plantsArray = useSelector((state) => state.plants.entities)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlants())
    }, [dispatch])

    console.log("plants?", plantsArray)


  return (
    <div>
        PlantsContainer
    </div>
  )
}

export default PlantsContainer