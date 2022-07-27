import React, {useState} from 'react'
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

function LoginPage({setUserLogin}) {

  const [loginInfo, setLoginInfo] = useState({username: "", password: ""})
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)  
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  

  const handleChange = (e) => {
    setLoginInfo({
        ...loginInfo,
        [e.target.name]: e.target.value
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    const userLogin = {
        username: loginInfo.username,
        password: loginInfo.password
    }
    const config = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userLogin)
    }
    fetch('/login', config)
    .then(r => {
        if (r.ok) {
            r.json().then((user) => setUserLogin(user))
            navigate('/homepage')
        } else {
            r.json().then((err) => {
                setErrors(err.errors)
            })
            navigate('/')
        }
    })
  }

  const handleSignupClick = () => {
    navigate('/signup')
  }

  return (
    <div>
        <form method='POST' onSubmit={handleLogin}>
            <Stack maxWidth={600} margin="auto" spacing={5} marginTop={5}>
                <FormControl>
                    <FormLabel>
                        Username
                    </FormLabel>
                    <Input 
                        type="text" 
                        isRequired 
                        id="username" 
                        name="username"
                        value= {loginInfo.username}
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
                        value={loginInfo.password}
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
                    <Button type='submit' >Log In</Button>
                </FormControl>
                <FormControl>
                    <Button onClick={handleSignupClick}>If you're new to Oasis, sign up instead!</Button>
                </FormControl>
            </Stack>
            <Stack spacing={3}>
                {errors.map((err) => {
                    return <Alert status='error'>
                        <AlertIcon/>
                        {`${err}`}
                        </Alert>
                })}
            </Stack>
        </form>
    </div>
  )
}

export default LoginPage