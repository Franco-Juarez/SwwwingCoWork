import { Heading, VStack, Text, Grid, GridItem, Icon } from "@chakra-ui/react"
import { FaBuilding, FaPrint, FaMugHot } from "react-icons/fa6";

const AboutUsSection = () => {
  return (
    <VStack alignItems={"flex-start"} p={{base:4, md:12}} pt={{base: 8, md:12}}>
      <VStack alignItems={{base:"center", md:"flex-start"}} gap={4}>
          <Heading textAlign={{base: "center", md:"left"}} color={"blue.500"} fontSize="sm">WHY CHOOSE SWWWING-STATE</Heading>
          <Heading textAlign={{base: "center", md:"left"}} >Provides the most<br /> complete list of properties</Heading>
        <Text textAlign={{base: "center", md:"left"}} >
          Find the ideal property that is most suitable for you. Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Text>
      </VStack>
      <Grid pb={8} pt={20} templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', xl:'repeat(3, 1fr)'}} gap={10}>
          <GridItem p={4} boxShadow='md' rounded='md' w='100%'>
            <Icon color={"mainColor"} fontSize={"4rem"} as={FaBuilding} />
            <Heading pt={4} w={"100%"} textAlign={"left"} fontSize={"1.2rem"}>
              Find your ideal office
            </Heading>
            <Text pt={2}>
              Whether its a private space or an entire floor for your organization, discover many customizable options.
            </Text>
          </GridItem>
          <GridItem p={4} boxShadow='md' rounded='md' w='100%'>
          <Icon color={"mainColor"} fontSize={"4rem"} as={FaPrint} />
          <Heading pt={4} w={"100%"} textAlign={"left"} fontSize={"1.2rem"}>
            Tailored to your needs:
          </Heading>
          <Text pt={2}>
            Premium offices, semi-furnished, or empty spaces that you can adapt to your own requirements.
          </Text>
          </GridItem>
          <GridItem p={4} boxShadow='md' rounded='md' w='100%'>
          <Icon color={"mainColor"} fontSize={"4rem"} as={FaMugHot} />
          <Heading pt={4} w={"100%"} textAlign={"left"} fontSize={"1.2rem"}>
            All in one place
          </Heading>
            <Text pt={2}>
              Find spaces with amenities such as a gym, cafeteria, buffet, recreation rooms, and more.
            </Text>
          </GridItem>
      </Grid>
    </VStack>
  )
}

export default AboutUsSection


