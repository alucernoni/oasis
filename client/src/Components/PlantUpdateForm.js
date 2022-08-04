import React, {useState} from 'react'
import {Button, useDisclosure, Modal, ModalOverlay, ModalCloseButton, ModalContent, ModalHeader, ModalBody, FormControl, FormLabel, Input} from '@chakra-ui/react'

function PlantUpdateForm({plant}) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [imageSelected, setImageSelected] = useState("")
    const [imageURL, setImageURL] = useState("")

    const initialState = {
        common_name: plant.common_name,
        scientific_name: plant.scientific_name,
        description: plant.description,
        care_and_conditions_overview: plant.care_and_conditions_overview,
        plant_image_url: plant.plant_image_url,
        // difficulty_level: plant.difficulty_level
    }

    const [updatedPlantData, setUpdatedPlantData] = useState(initialState)

    const handleChange= (e) => {
        setUpdatedPlantData({
            ...updatedPlantData,
            [e.target.name]: e.target.value
        })
    }

    const saveChanges = (e) => {
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
        .then((data) => {
            setImageURL(data.url)
            return data.url
        })
        .then((imageAddress) => {
            const updatedPlant = {
                common_name: updatedPlantData.common_name,
                scientific_name: updatedPlantData.scientific_name,
                description: updatedPlantData.description,
                care_and_conditions_overview: updatedPlantData.care_and_conditions_overview,
                // plant_image_url: imageAddress,
            }
            if (imageAddress) {
                updatedPlant.plant_image_url = imageAddress
            }
            const config = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(updatedPlant)
                }
            fetch(`/plants/${plant.id}`, config)
            .then(r => r.json())
            .then(setUpdatedPlantData(initialState))
        })
    }

  return (
    <div>
        <Button onClick={onOpen}>edit</Button>
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Edit {plant.common_name}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Common Name</FormLabel>
                        <Input
                            placeholder= {plant.common_name}
                            name= "common_name"
                            id= "common_name"
                            value= {updatedPlantData.common_name}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Scientific Name</FormLabel>
                        <Input
                            placeholder={plant.scientific_name}
                            name= "scientific_name"
                            id= "scientific_name"
                            value= {updatedPlantData.scientific_name}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Input
                        type='text'
                        placeholder= {plant.description}
                        name= "description"
                        id= "description"
                        value={updatedPlantData.description}
                        onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Care and Conditions Overview</FormLabel>
                        <Input
                        type= 'text'
                        placeholder= {plant.care_and_conditions_overview}
                        name= "care_and_conditions_overview"
                        id= "care_and_conditions_overview"
                        value = {updatedPlantData.care_and_conditions_overview}
                        onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>{plant.common_name} Image</FormLabel>
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
                        <Button type='submit' onClick={saveChanges}>Save Changes</Button>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}

export default PlantUpdateForm