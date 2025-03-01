import { useState } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage.jsx';
import HomePage from './pages/HomePage.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
      </Routes>
    </Box>
  )
}

export default App;
