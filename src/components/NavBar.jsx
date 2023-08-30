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
    px={8} 
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
      position={{base:isToggled ? "absolute" : "relative", lg:"relative"}}
      top={0}
      right={0}
      bottom={0}
      h={{base: isToggled ? "100vh" : "auto", lg:"auto"}}
      textAlign={{base:"right", lg:"center"}}
      backgroundColor={"whiteAlpha.400"}
      boxShadow={{base: isToggled ? "0 0 0 100vmax rgba(0, 0, 0, .5)" : "none", lg:"none"}}
      >
        <UnorderedList m={0} p={isToggled ? 8 : 2}  gap={4} display={{base: isToggled ? 'flex' : 'none', lg:"flex"}} flexDirection={{base:"column", lg:"row"}} alignItems={"center"} fontSize={20}>
          <ListItem listStyleType={"none"}><Link>For Sell</Link></ListItem>
          <ListItem listStyleType={"none"}><Link>For Rent</Link></ListItem>
          <ListItem listStyleType={"none"}><Link>News Incomes</Link></ListItem>
          <ListItem listStyleType={"none"}><Link>Blog</Link></ListItem>
        </UnorderedList>
        <Button
        display={{base:"flex", lg:"none"}}
        flexDirection={"column"}
        gap={2}
        p={0}
        backgroundColor={"transparent"}
        onClick={() => setIsToggled(!isToggled)}
        >
          <CloseIcon display ={isToggled ? 'block' : 'none'} />
          <HamburgerIcon display ={isToggled ? 'none' : 'block'}   />
        </Button>
        <Popover> 
          <PopoverTrigger>
          <Button display={{base:"none", lg: "block"}}  _hover={{ bg: 'mainColor' }} px={8} color={"whiteAlpha.900"} borderRadius={"20px"} backgroundColor={"blackAlpha.900"}>Book a Call</Button>
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
      </HStack>
    </HStack>
  )
}

export default NavBar;