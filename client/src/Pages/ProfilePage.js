import { Center, Box, Image, Stack, Text, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, InputRightElement, InputGroup, FormHelperText } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import ProfileMap from '../Components/ProfileMap'


function ProfilePage({user, updateUser}) {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const [showPassword, setShowPassword] = useState(false)
    const [imageSelected, setImageSelected] = useState("")
    const [imageURL, setImageURL] = useState("")

    const initialState = {
        first_name: `${user.first_name}`,
        last_name: `${user.last_name}`,
        username: `${user.username}`,
        bio: `${user.bio}`,
        profile_image: `${user.profile_image}`,
        email: `${user.email}`,
        city: `${user.city}`,
        state: `${user.state}`,
        zipcode: `${user.zipcode}`,
        // password: "",
        // password_confirmation: ""
    }

    const [newUserData, setNewUserData] = useState(initialState)
    const isInvalid = newUserData.password !== newUserData.password_confirmation

    const handleChange = (e) => {
        setNewUserData({
            ...newUserData,
            [e.target.name]: e.target.value
        })
    }

    const saveChanges = (e) => {
        e.preventDefault();

        const imageFormData = new FormData()
        imageFormData.append("file", imageSelected)
        imageFormData.append("upload_preset", "oasis_preset")
        imageFormData.append("cloud_name", "oasiscloud")
        console.log("imageselected:", imageSelected)

        fetch("https://api.cloudinary.com/v1_1/oasiscloud/image/upload",{
            method:"POST",
            body: imageFormData
        })
        .then((r) => r.json())
        .then((data) => setImageURL(data.url))
        // .catch((err) => console.log(err))
        .then(() => {
            const updatedProfile = {
                first_name: newUserData.first_name,
                last_name: newUserData.last_name,
                username: newUserData.username,
                bio: newUserData.bio,
                profile_image: imageURL,
                email: newUserData.email,
                city: newUserData.city,
                state: newUserData.state,
                zipcode: newUserData.zipcode,
                password: newUserData.password,
                password_confirmation: newUserData.password_confirmation
                }
            const config = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(updatedProfile)
                }
            fetch(`/users/${user.id}`, config)
            .then(r => r.json())
            // .then(updateUser)
            .then(setNewUserData(initialState))
        })
    }

  return (
    // <div>ProfilePage</div>
    <Center>
    <Stack>
        <Stack direction='row'>
            <Box>
                <Image
                    rounded={'lg'}
                    borderRadius='full'
                    boxSize = '150px'
                    objectFit={'cover'}
                    src={user.profile_image}
                />
            </Box>  
            <Button onClick={onOpen}>
            Edit Profile
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Edit Profile</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input 
                            placeholder= {user.first_name} 
                            name= "first_name"
                            id= "first_name"
                            value= {newUserData.first_name}
                            onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Last Name</FormLabel>
                            <Input 
                            placeholder= {user.last_name}  
                            name= "last_name"
                            id= "last_name"
                            value= {newUserData.last_name}
                            onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Username</FormLabel>
                            <Input 
                            placeholder= {user.username}  
                            name= "username"
                            id= "username"
                            value= {newUserData.username}
                            onChange={handleChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Password
                            </FormLabel>
                            <InputGroup>
                            <Input 
                                type={showPassword ? 'text' : 'password'}
                                isRequired 
                                id="password" 
                                name="password"
                                value={newUserData.password}
                                onChange={handleChange}
                            />
                            <InputRightElement width="4.5 rem">
                                <Button
                                    h="1.75 rem"
                                    size="sm"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                            <FormHelperText>Password must be at least 8 characters and contain 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Password Confirmation
                            </FormLabel>
                            <InputGroup>
                            <Input 
                                type={showPassword ? 'text' : 'password'}
                                isRequired 
                                id="password_confirmation" 
                                name="password_confirmation"
                                value={newUserData.password_confirmation}
                                onChange={handleChange}
                            />
                            <InputRightElement width="4.5 rem">
                                <Button
                                    h="1.75 rem"
                                    size="sm"
                                    onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Bio</FormLabel>
                            <Input type='text' 
                            placeholder= {user.bio}  
                            name= "bio"
                            id= "bio"
                            value= {newUserData.bio}
                            onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Profile Photo</FormLabel>
                            <Input 
                            placeholder= 'Upload an image' 
                            type='file' 
                            accept='image/*' 
                            name= "profile_image"
                            id= "profile_image"
                            // value= {newUserData.profile_image}
                            onChange={(e) => setImageSelected(e.target.files[0])} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input 
                            placeholder= {user.email} 
                            name= "email"
                            id= "email"
                            value= {newUserData.email}
                            onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Location</FormLabel>
                            <Input 
                            placeholder= {user.city} 
                            name= "city"
                            id= "city"
                            value= {newUserData.city}
                            onChange={handleChange} />
                            <Input 
                            placeholder= {user.state} 
                            name= "state"
                            id= "state"
                            value= {newUserData.state}
                            onChange={handleChange} />
                            <Input 
                            placeholder= {user.zipcode} 
                            name= "zipcode"
                            id= "zipcode"
                            value= {newUserData.zipcode}
                            onChange={handleChange} />
                        </FormControl>
                        <FormControl>
                        <Button type='submit' disabled={isInvalid} onClick={saveChanges}>Save Changes</Button>
                        {/* <FormHelperText>If Sign Up! button is unclickable, please doublecheck that your password entries match!</FormHelperText> */}
                    </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Stack>
        <Text>
            {user.username}
        </Text>
        <Stack direction='row'>
            <Text>{user.first_name}{user.last_name}</Text>
            <Text>{user.city}, {user.state}</Text>
        </Stack>
        <Text>Bio:</Text>
        <Text>{user.bio}</Text>
        <NavLink to='/myplants'>See my plants</NavLink>
        <NavLink to="/wishlist">View Wishlist</NavLink>
        <ProfileMap/>
    </Stack>
    </Center>
  )
}

export default ProfilePage