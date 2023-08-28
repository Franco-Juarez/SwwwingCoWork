import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import bgImage from "../assets/heroBackground.png";

const HeroSection = () => {
  return (
    <HStack backgroundPosition={"bottom"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={bgImage} width={"100%"} height={"90vh"}>
      <VStack gap={4} alignItems={"flex-start"} pl={12}>
        <Heading fontSize={"3rem"}  color={"blackAlpha.900"}>Discover a place <br /> you will love to work in</Heading>
        <Text color={"blackAlpha.900"} fontSize={"1.2rem"}>
            Find the perfect office spaces for yourselfe, your team or a whole bussiness. 
        </Text>
        <HStack alignItems={"center"}>
          <Text fontFamily={"'Unbounded Variable', sans-serif"} fontSize={"1.5rem"} fontWeight={700}>
            1500+
          </Text>
          <Text>
            Property Ready
          </Text>
          <Text fontFamily={"'Unbounded Variable', sans-serif"} fontSize={"1.5rem"} fontWeight={700}>
            500+
          </Text>
          <Text>
            Happy Customer
          </Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default HeroSection;