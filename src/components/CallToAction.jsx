import { Button, VStack, Heading, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Portal, PopoverArrow, PopoverCloseButton  } from "@chakra-ui/react";
import ctaImg from "../assets/ctaBg.png";

const CallToActionSection = () => {
  return (
    <VStack backgroundPosition={"top"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={ctaImg} gap={8} alignItems={{base:"center", lg:"flex-start"}} p={{base: 4, lg:12}} >
      <Heading textAlign={{base: "center", lg:"left"}} fontWeight={"400"} textTransform={"uppercase"} fontSize={"1rem"}>Suscríbete a nuestro newsletter</Heading>
      <Heading textAlign={{base: "center", lg:"left"}}>Recibe las últimas actualizaciones sobre Gestión Laboral y propiedades en tu correo.</Heading>
      <Popover> 
          <PopoverTrigger>
          <Button _hover={{ bg: 'mainColor', color:"blackAlpha.900" }} px={8} borderRadius={"15px"} backgroundColor={"blackAlpha.900"} color={"whiteAlpha.900"}>Find Now</Button>
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
    </VStack>
  )
}

export default CallToActionSection;