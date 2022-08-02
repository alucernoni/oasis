import React, {useState} from 'react'
import {Button, useDisclosure, Modal, ModalOverlay, ModalCloseButton, ModalContent, ModalHeader, ModalBody, FormControl, FormLabel, Input, FormHelperText} from '@chakra-ui/react'


function PlantAddForm() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [imageSelected, setImageSelected] = useState("")
    const [imageURL, setImageURL] = useState("")

    const plantInitialState = {
        common_name: "",
        scientific_name: "",
        description: "",
        care_and_conditions_overview: "",
        plant_image_url: "",
        watering_interval_days: 7
    }

    const plantWantsIntitialState = {
        ideal_water_frequency
    }

    const [newPlantForm, setNewPlantForm] = useState(plantInitialState)

    const handleChange= (e) => {
        setNewPlantForm({
            ...newPlantForm,
            [e.target.name]: e.target.value
        })
    }

    const handleAddPlant = (e) => {
        e.preventDefault();

        const imageFormData = new FormData()
        imageFormData.append("file", imageSelected)
        imageFormData.append("upload_preset", "oasis_preset")
        imageFormData.append("cloud_name", "oasiscloud")  

        fetch("https://api.cloudinary.com/v1_1/oasiscloud/image/upload",{
            method:"POST",
            body: imageFormData
        })
        .then((r) => r.json())
        .then((data) => setImageURL(data.url))
        .then(() => {
            const newPlant = {
                common_name: newPlantForm.common_name,
                scientific_name: newPlantForm.scientific_name,
                description: newPlantForm.description,
                care_and_conditions_overview: newPlantForm.care_and_conditions_overview,
                plant_image_url: imageURL,
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
            .then(newestPlant => newestPlant)


            .then(setNewPlantForm(plantInitialState))
        })
    }


  return (
    <div>
        <Button onClick={onOpen}>Add a new plant!</Button>
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
                    placeholder= "Brief overview of plant care and preferred conditions"
                    name= "care_and_conditions_overview"
                    id= "care_and_conditions_overview"
                    value = {newPlantForm.care_and_conditions_overview}
                    onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Plant Image</FormLabel>
                    <Input
                        placeholder='Upload an image'
                        type="file"
                        accept='image/*'
                        name='plant_image_url'
                        id='plant_image_url'
                        onChange={(e) => setImageSelected(e.target.files[0])}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Watering Frequency</FormLabel>
                    <Input
                        placeholder='Water every __ days'
                        type="number"
                        name='watering_interval_days'
                        id="watering_interval_days"
                        value={newPlantForm.watering_interval_days}
                        onChange={handleChange}
                    />
                    <FormHelperText>Please enter only the number of days between waterings</FormHelperText>
                </FormControl>
                <FormControl>
                    <Button type='submit' onClick={handleAddPlant}>Add Plant!</Button>
                </FormControl>
            </ModalBody>
        </ModalContent>
        </Modal>
    </div>
  )
}

export default PlantAddForm