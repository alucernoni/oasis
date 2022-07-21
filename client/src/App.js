import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { useState, useEffect } from "react";


function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {
      fetch("/hello")
        .then((r) => r.json())
        .then((data) => setCount(data.count));
    }, []);
  
    return (
      <div className="App">
        <h1>Page Count: {count}</h1>
      </div>
    );
  }
  
  export default App;
