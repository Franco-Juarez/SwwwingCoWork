import { Button, VStack, Heading } from "@chakra-ui/react";
import ctaImg from "../assets/ctaBg.png";

const CallToActionSection = () => {
  return (
    <VStack backgroundPosition={"top"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={ctaImg} gap={8} alignItems={"flex-start"} p={12} >
      <Heading fontWeight={"400"} textTransform={"uppercase"} fontSize={"1rem"}>Find Home With Us</Heading>
      <Heading>Find The Right House Over <br /> 40,000 property options</Heading>
      <Button px={8} borderRadius={"15px"} backgroundColor={"blackAlpha.900"} color={"whiteAlpha.900"}>Find Now</Button>
    </VStack>
  )
}

export default CallToActionSection;