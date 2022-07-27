import React, { useState } from 'react'
import {
    Stack, 
    Button, 
    FormControl, 
    FormLabel, 
    InputGroup, 
    Input, 
    InputRightElement, 
    FormHelperText,
    AlertIcon,
    Alert,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function SignupPage({setUserSignup}) {

    const initialState = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        city: "",
        state: "",
        zipcode: "",
        password: "",
        password_confirmation: ""
    }
    const [signupInfo, setSignupInfo] = useState(initialState)
    const [errors, setErrors] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const isInvalid = signupInfo.password !== signupInfo.password_confirmation || signupInfo.first_name === "" || signupInfo.last_name === "" || signupInfo.username === "" || signupInfo.email === "" || signupInfo.city === "" || signupInfo.state === "" || signupInfo.zipcode === "" || signupInfo.password === "" || signupInfo.password_confirmation === ""



    const handleChange = (e) => {
        setSignupInfo({
            ...signupInfo,
            [e.target.name]: e.target.value
        })
        console.log("signupInfo", signupInfo)
    }

    const handleSignup = (e) => {
        e.preventDefault();
        
        const userSignup = {
            first_name: signupInfo.first_name,
            last_name: signupInfo.last_name,
            username: signupInfo.username,
            email: signupInfo.email,
            city: signupInfo.city,
            state: signupInfo.state,
            zipcode: signupInfo.zipcode,
            password: signupInfo.password,
            password_confirmation: signupInfo.password_confirmation
        }

        const config = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userSignup)
        }

        fetch ('/signup', config)
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUserSignup(user))
                navigate('/homepage')
            } else {
                r.json().then((err) => setErrors(err.errors))
                navigate('/signup')
            }
        })
    }

    const handleLoginClick = () => {
        navigate('/')
      }

    return (
         <div>
             <form method='POST' onSubmit={handleSignup}>
                 <Stack maxWidth={600} margin="auto" spacing={5} marginTop={5} marginBottom={20} >
                    <FormControl>
                        <FormLabel>
                            First Name
                        </FormLabel>
                        <Input 
                            type="text" 
                            isRequired 
                            id="first_name" 
                            name="first_name"
                            value= {signupInfo.first_name}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Last Name
                        </FormLabel>
                        <Input 
                            type="text" 
                            isRequired 
                            id="last_name" 
                            name="last_name"
                            value= {signupInfo.last_name}
                            onChange={handleChange}    
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Username
                        </FormLabel>
                        <Input 
                            type="text" 
                            isRequired 
                            id="username" 
                            name="username"
                            value= {signupInfo.username}
                            onChange={handleChange}
                        />
                        <FormHelperText>This is the name that will be displayed with your profile</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Email Address
                        </FormLabel>
                        <Input 
                            type="email" 
                            isRequired 
                            id="email" 
                            name="email"
                            value= {signupInfo.email}
                            onChange={handleChange}
                        />
                        <FormHelperText>We'll never share your email address</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            City
                        </FormLabel>
                        <Input 
                            type="text" 
                            isRequired 
                            id="city" 
                            name="city"
                            value= {signupInfo.city}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            State
                        </FormLabel>
                        <Input 
                            type="text" 
                            isRequired 
                            id="state" 
                            name="state"
                            value= {signupInfo.state}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Zipcode
                        </FormLabel>
                        <Input 
                            type="number" 
                            isRequired 
                            id="zipcode" 
                            name="zipcode"
                            value= {signupInfo.zipcode}
                            onChange={handleChange}
                        />
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
                            value={signupInfo.password}
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
                            value={signupInfo.password_confirmation}
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
                    <FormControl>
                        <Button type='submit' disabled={isInvalid}>Sign Up!</Button>
                        <FormHelperText>If Sign Up! button is unclickable, please doublecheck that your password entries match!</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <Button onClick={handleLoginClick}>Already have an account? Log in instead!</Button>
                    </FormControl>
                 </Stack>
             </form>
         </div>
    )
}

export default SignupPage