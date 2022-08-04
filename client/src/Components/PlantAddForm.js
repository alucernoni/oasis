import React, {useState} from 'react'
import {Button, useDisclosure, Modal, ModalOverlay, ModalCloseButton, ModalContent, ModalHeader, ModalBody, FormControl, FormLabel, Input, FormHelperText, IconButton, Image} from '@chakra-ui/react'
import {useDispatch} from 'react-redux'
import {plantAdded} from './PlantsSlice'
import '../index.css'

function PlantAddForm() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [imageSelected, setImageSelected] = useState("")
    const [imageURL, setImageURL] = useState("")
    const dispatch = useDispatch()

    const plantInitialState = {
        common_name: "",
        scientific_name: "",
        description: "",
        care_and_conditions_overview: "",
        plant_image_url: "",
        difficulty_level: "",
        watering_interval_days: ""
    }

    const plantWantsIntitialState = {
        ideal_water_frequency: "",
        ideal_light_level: "",
        ideal_food_frequency: "",
        plant_id: ""
    }

    const plantToleratesInitialState = {
        low_light: false,
        indirect_light: true,
        full_light: false,
        drought: true,
        overwatering: false
    }

    const [newPlantForm, setNewPlantForm] = useState(plantInitialState)
    const [newPlantWantsForm, setNewPlantWantsForm] = useState(plantWantsIntitialState)
    const [newPlantToleratesForm, setNewPlantToleratesForm] = useState(plantToleratesInitialState)
    const [newestPlant, setNewestPlant] = useState({})
    const isInvalid = newPlantForm.difficulty_level < 1 || newPlantForm.difficulty_level > 5

    const fixPlant = (createdPlant) => { 
            console.log("newest plant", newestPlant)

            const newPlantWants = {
                ideal_water_frequency: newPlantWantsForm.ideal_water_frequency,
                ideal_light_level: newPlantWantsForm.ideal_light_level,
                ideal_food_frequency: newPlantWantsForm.ideal_food_frequency,
                plant_id: createdPlant.id
            }

            const config2 = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(newPlantWants)
            }
            fetch('/plant_wants', config2)
            .then(r => r.json())
            .then(setNewPlantWantsForm(plantWantsIntitialState))
            .then(setNewPlantForm(plantInitialState))
        }

    const handleChange= (e) => {
        setNewPlantForm({
            ...newPlantForm,
            [e.target.name]: e.target.value
        })
    }

    const handleWantsChange = (e) => {
        setNewPlantWantsForm({
            ...newPlantWantsForm,
            [e.target.name]: e.target.value
        })
    }

    const handleToleratesChange = (e) => {
        setNewPlantToleratesForm({
            ...newPlantToleratesForm,
            [e.target.name]: e.target.value
        })
    }

    const handleAddPlant = (e) => {
        e.preventDefault();

        const imageFormData = new FormData()
        imageFormData.append("file", imageSelected)
        imageFormData.append("upload_preset", "oasis_preset")
        imageFormData.append("cloud_name", "oasiscloud") 
        console.log("plant image selected", imageSelected) 

        fetch("https://api.cloudinary.com/v1_1/oasiscloud/image/upload",{
            method:"POST",
            body: imageFormData
        })
        .then((r) => r.json())
        .then((data) => {
            setImageURL(data.url)
            return data.url
        })
        .then((imageaddress) => {
            console.log("image address response", imageaddress)
            const newPlant = {
                common_name: newPlantForm.common_name,
                scientific_name: newPlantForm.scientific_name,
                description: newPlantForm.description,
                care_and_conditions_overview: newPlantForm.care_and_conditions_overview,
                plant_image_url: imageaddress,
                difficulty_level: newPlantForm.difficulty_level,
                watering_interval_days: newPlantForm.watering_interval_days
            }

            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(newPlant)
            }
            fetch('/plants', config)
            .then(r => r.json())
            .then((createdPlant) => {
                // setNewestPlant(createdPlant)
                return createdPlant
            })
            .then((createdPlant) => {
                console.log("first fetch resp", createdPlant)
                console.log("newest plant before fix plant", newestPlant)
                setNewestPlant(createdPlant)
                dispatch(plantAdded(createdPlant))
                console.log("for redux obj2", newestPlant)
                fixPlant(createdPlant)
            })
            // .then(() => {
            //     // console.log("newest plant", newestPlant)
            //     console.log("newest plant 1", newestPlant)
            //     const newPlantWants = {
            //         ideal_water_frequency: newPlantWantsForm.ideal_water_frequency,
            //         ideal_light_level: newPlantWantsForm.ideal_light_level,
            //         ideal_food_frequency: newPlantWantsForm.ideal_food_frequency,
            //         plant_id: newestPlant.id
            //     }

            //     const config2 = {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //           },
            //         body: JSON.stringify(newPlantWants)
            //     }
            //     fetch('/plant_wants', config2)
            //     .then(r => r.json())
            //     .then(setNewPlantWantsForm(plantWantsIntitialState))
            //     .then(setNewPlantForm(plantInitialState))
            // })
        })
        console.log("for redux obj", newestPlant)
    }


  return (
    <div>
        <IconButton id="plant_add" aria-label='Add a new plant!' onClick={onOpen} backgroundColor="transparent"  >
            <Image
                src='https://res.cloudinary.com/oasiscloud/image/upload/v1659635370/AddPlantIcon_1_h2bz8a.png'
                alt='Add a new plant!'
                height= "45px"
                borderRadius="full"
            />
        </IconButton>

        {/* <Button onClick={onOpen}>Add a new plant!</Button> */}
        <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Add a new plant to the Oasis!</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Common Name</FormLabel>
                    <Input
                        placeholder= "Common Name"
                        isRequired
                        name= "common_name"
                        id= "common_name"
                        value= {newPlantForm.common_name}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Scientific Name</FormLabel>
                    <Input
                        placeholder="Scientific Name"
                        isRequired
                        name= "scientific_name"
                        id= "scientific_name"
                        value= {newPlantForm.scientific_name}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Input
                    type='text'
                    // isRequired
                    placeholder= "Brief description of plant"
                    name= "description"
                    id= "description"
                    value={newPlantForm.description}
                    onChange={handleChange}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Care and Conditions Overview</FormLabel>
                    <Input
                    type= 'text'
                    // isRequired
                    placeholder= "Brief overview of plant care and preferred conditions"
                    name= "care_and_conditions_overview"
                    id= "care_and_conditions_overview"
                    value = {newPlantForm.care_and_conditions_overview}
                    onChange={handleChange}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Plant Image</FormLabel>
                    <Input
                        placeholder='Upload an image'
                        isRequired
                        type="file"
                        accept='image/*'
                        name='plant_image_url'
                        id='plant_image_url'
                        onChange={(e) => setImageSelected(e.target.files[0])}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Difficulty Level</FormLabel>
                    <Input
                        placeholder='Difficulty between 1-5'
                        // isRequired
                        type="number"
                        name='difficulty_level'
                        id="difficulty_level"
                        value={newPlantForm.difficulty_level}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Watering Frequency (numerical)</FormLabel>
                    <Input
                        placeholder='Water every __ days'
                        // isRequired
                        type="number"
                        name='watering_interval_days'
                        id="watering_interval_days"
                        value={newPlantForm.watering_interval_days}
                        onChange={handleChange}
                    />
                    <FormHelperText>Please enter only the number of days between waterings</FormHelperText>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Ideal Watering</FormLabel>
                    <Input
                        placeholder='e.g: Every 1-2 weeks in the summer, less if in low light'
                        isRequired
                        name='ideal_water_frequency'
                        id='ideal_water_frequency'
                        value={newPlantWantsForm.ideal_water_frequency}
                        onChange={handleWantsChange}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Ideal Light Level</FormLabel>
                    <Input
                        placeholder='e.g: Bright, indirect light'
                        isRequired
                        name='ideal_light_level'
                        id='ideal_light_level'
                        value={newPlantWantsForm.ideal_light_level}
                        onChange={handleWantsChange}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Ideal Fertilization</FormLabel>
                    <Input
                        placeholder='e.g: Fertilize every 2 months in summer at 1/2 strength'
                        isRequired
                        name='ideal_food_frequency'
                        id='ideal_food_frequency'
                        value={newPlantWantsForm.ideal_food_frequency}
                        onChange={handleWantsChange}
                    />
                </FormControl>
                {/* <FormControl mt={4}>
                    <FormLabel>Tolerances?</FormLabel>
                </FormControl> */}
                <FormControl mt={4}>
                    <Button type='submit' disabled={isInvalid} onClick={handleAddPlant}>Add Plant!</Button>
                </FormControl>
            </ModalBody>
        </ModalContent>
        </Modal>
    </div>
  )
}

export default PlantAddForm