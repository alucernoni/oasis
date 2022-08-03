import React from 'react'
import {Center, Box, Stack, Image, Text, useDisclosure, useColorModeValue, Heading, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, ModalHeader} from '@chakra-ui/react'

function UserPlantCard({plant}) {

    const nicknamePlaceholder = (plant.plant_nickname === "null") ? plant.plant_nickname = " " : plant.plant_nickname
    const {isOpen, onOpen, onClose} = useDisclosure()

    console.log("plant profile", plant)
    const plantWants = plant.plant_wants.map((want) => want)
    console.log("plantwants profile", plantWants)



  return (
    <Center>
        <Stack direction='row'>
        <Box role={'group'}
            p={6}
            paddingTop={20}
            paddingBottom={5}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${plant.plant_image_url})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}>
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={plant.plant_image_url}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'black'} fontWeight={600} fontSize={'xl'} textTransform={'uppercase'}>
                    {nicknamePlaceholder} the {plant.common_name}
                  </Text>
                  <Text as="i" >
                    {plant.scientific_name}
                  </Text>
                  <Heading color={'gray.600'} fontSize={'1xl'} fontFamily={'body'} fontWeight={500}>
                      {plant.description}
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={400} fontSize={'l'}>
                        Difficulty Level: {plant.difficulty_level}/5
                    </Text>
                    <Button onClick={onOpen}>See care</Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay/>
                      <ModalContent>
                          <ModalHeader>{plant.common_name} Care</ModalHeader>
                          <ModalCloseButton/>
                          <ModalBody>
                            <Stack>
                              <Text fontWeight="bold">Overview:</Text>
                              <Text>{plant.care_and_conditions_overview}</Text>
                              <Text fontWeight="bold">Ideal Conditions:</Text>
                              <Text>Ideal Watering: {plantWants[0].ideal_water_frequency}</Text>
                              <Text>Ideal Light: {plantWants[0].ideal_light_level}</Text>
                              <Text>Ideal Fertilization: {plantWants[0].ideal_food_frequency}</Text>
                              {/* <Text fontWeight="bold">{plant.common_name} will tolerate:</Text> */}
n                            </Stack>
                          </ModalBody>
                      </ModalContent>
                    </Modal>
                  </Stack>
                </Stack>
            </Box>
        </Stack>
    </Center>
  )
}

export default UserPlantCard