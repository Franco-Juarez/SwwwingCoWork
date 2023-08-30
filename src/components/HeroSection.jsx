import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import bgImage from "../assets/heroBackground.png";

const HeroSection = () => {
  return (
    <HStack p={{base:2, lg:0}} backgroundPosition={"bottom"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={bgImage} width={"100%"} height={"90vh"}>
      <VStack gap={4} alignItems={{base:"center", md: "flex-start"}}  pl={{base:0, md:12}}>
        <Heading w={{base:"85%", lg:"100%"}} textAlign={{base:"center", md:"left"}} fontSize={{base:"2rem", md:"3rem"}}  color={"whiteAlpha.900"}>Discover a place <br /> you will <Box as="span" color={"mainColor"}>love</Box> to work in</Heading>
        <Text textAlign={{base:"center", md:"left"}} color={"whiteAlpha.900"} fontSize={{base:"1.2rem", sm:"1.5rem"}}>
            Find the perfect office spaces for yourselfe, your team or a whole bussiness. 
        </Text>
        <HStack flexDirection={{base: "column", md:"row"}} color={"whiteAlpha.900"} alignItems={"center"}>
          <Text textAlign={{base:"center", md:"left"}} fontFamily={"'Unbounded Variable', sans-serif"} fontSize={{base:"1rem", lg:"1.5rem"}} fontWeight={700}>
            1500+
          </Text>
          <Text textAlign={{base:"center", md:"left"}} >
            Property Ready
          </Text>
          <Text textAlign={{base:"center", md:"left"}} fontFamily={"'Unbounded Variable', sans-serif"} fontSize={{base:"1rem", lg:"1.5rem"}} fontWeight={700}>
            500+
          </Text>
          <Text textAlign={{base:"center", md:"left"}}>
            Happy Customer
          </Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default HeroSection;