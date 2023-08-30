import { HStack, UnorderedList, ListItem, Link, Button, Image, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Portal, PopoverArrow, PopoverCloseButton } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import logo from "../assets/logo.png"
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <HStack
    as={motion.div}  
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
      }}
    px={{base:4, md: 12}} 
    backgroundColor={"whiteAlpha.400"} 
    justifyContent={"space-between"} 
    >
      <Image w={100} src={logo} />
      <HStack 
      gap={4}
      flexDirection={{base: isToggled ? "column-reverse" : "row", lg:"row"}}
      justifyContent={{base: isToggled ? "flex-end" : "center", lg:"center"}}
      alignItems={{base: isToggled ? "flex-end" : "center", lg:"center"}}
      p={4}
      pr={0}
      position={{base:isToggled ? "absolute" : "relative", lg:"relative"}}
      top={0}
      right={0}
      bottom={0}
      w={{base: isToggled ? "100vw" : "auto", lg:"auto"}}
      h={{base: isToggled ? "100vh" : "auto", lg:"auto"}}
      textAlign={{base:"right", lg:"center"}}
      backgroundColor={"#FFFFFF"}
      boxShadow={{base: isToggled ? "0 0 0 100vmax rgba(0, 0, 0, .7)" : "none", lg:"none"}}
      >
        <UnorderedList w={"100%"} m={0} p={isToggled ? 8 : 2}  gap={4} display={{base: isToggled ? 'flex' : 'none', lg:"flex"}} flexDirection={{base:"column", lg:"row"}} alignItems={"center"} fontSize={20}>
          <ListItem listStyleType={"none"}><Link>Servicios</Link></ListItem>
          <ListItem listStyleType={"none"}><Link>Oficinas</Link></ListItem>
          <ListItem listStyleType={"none"}><Link>Blog</Link></ListItem>
          <Popover> 
          <PopoverTrigger>
          <Button  _hover={{ bg: 'mainColor' }} px={8} color={"whiteAlpha.900"} borderRadius={"20px"} backgroundColor={"blackAlpha.900"}>Contacto</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Header</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button colorScheme='blue'>Button</Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        </UnorderedList>
        <Button
        display={{base:"flex", lg:"none"}}
        flexDirection={"column"}
        mr={{base: isToggled ? 4 : "auto", lg:"auto"}}
        gap={2}
        p={4}
        backgroundColor={"transparent"}
        onClick={() => setIsToggled(!isToggled)}
        >
          <CloseIcon display ={isToggled ? 'block' : 'none'} />
          <HamburgerIcon display ={isToggled ? 'none' : 'block'}   />
        </Button>
      </HStack>
    </HStack>
  )
}

export default NavBar;