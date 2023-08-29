import { VStack, Image, Box, Icon, Button, Heading, Text, Link, Flex, GridItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";




// eslint-disable-next-line react/prop-types
const PropertiesCards = ({propertyName, propertyPrice, propertyLocation, propertydescripcion, propertyImage}) => {

  return (
    <GridItem>
      <VStack minH={"520px"} px={2} pb={8} alignItems={"flex-start"} boxShadow='md' rounded='md' w={"100%"} justifyContent={"space-between"}>
        <Box position={"relative"}>
          <Image objectFit={"cover"} w={"100%"} h={"200px"} borderRadius={20} src={propertyImage} />
          <Icon mr={2} mt={2} borderRadius={"50%"} p={2} backgroundColor={"whiteAlpha.900"} fontSize={"2rem"}  right={0} top={0} zIndex={9999} position={"absolute"} as={AiOutlineHeart}></Icon>
        </Box>
        <Flex py={2} gap={2}>
          <Button fontSize={".8rem"} borderRadius={20} display={"inline"}>{propertyLocation}</Button>
          <Button fontSize={".8rem"} borderRadius={20} display={"inline"}>Negotiable</Button>
        </Flex>
        <Heading fontSize={"1.2rem"}>${propertyPrice}</Heading>
        <Text fontWeight={"bold"}>{propertyName}</Text>
        <Text>{propertydescripcion}</Text>
        <Flex pt={8} gap={2}>
          <Link href='https://chakra-ui.com' isExternal>
            <ExternalLinkIcon mx='2px' /> 4 Bedrooms 
          </Link>
          <Link href='https://chakra-ui.com' isExternal>
            <ExternalLinkIcon mx='2px' /> 3 Bathrooms 
          </Link>
        </Flex>
      </VStack>
    </GridItem>
  )
}

export default PropertiesCards;