import { PlusSquareIcon } from '@chakra-ui/icons';
import * as chakra from '@chakra-ui/react';
import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

Object.entries(chakra).forEach(([name, exported]) => window[name] = exported);

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return <Container maxW={"1140px"} px={4} >
        <Flex 
            h={16} 
            alignItems={"center"} 
            justifyContent={"space-between"} 
            FlexDirection={{
                base: "column",
                sm: "row"
            }}
        >
            <Text   
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize={{base: '22', sm: '28'}}
                fontWeight='bold'
            >
                <Link to={'/'}>Product Store 🛒</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link href={'/create'}>
                    <Button>
                        <PlusSquareIcon fontSize={20}/>
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon/> : <IoSunny/>}
                </Button>
            </HStack>
        </Flex>
    </Container>;
};

export default Navbar;