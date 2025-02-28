import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={"100vh"} backgroundColor={"#f5f5f5"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
      </Routes>
    </Box>
  )
}

export default App;
