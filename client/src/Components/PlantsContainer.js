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

    // console.log("plants?", plantsArray)

    const plantsDisplay = plantsArray.length > 0 ? plantsArray.map((plant) => <PlantCard key={plant.id} plant={plant}/>) : null

  return (
    <div>
        PlantsContainer
        {plantsDisplay}
    </div>
  )
}

export default PlantsContainer