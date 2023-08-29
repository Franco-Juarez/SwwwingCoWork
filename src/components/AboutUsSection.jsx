import { Heading, VStack, Text, Grid, GridItem, Icon } from "@chakra-ui/react"
import { FaBuilding, FaPrint, FaMugHot } from "react-icons/fa6";

const AboutUsSection = () => {
  return (
    <VStack alignItems={"flex-start"} p={12}>
      <VStack alignItems={"flex-start"} gap={4}>
          <Heading color={"blue.500"} fontSize="sm">WHY CHOOSE SWWWING-STATE</Heading>
          <Heading>Provides the most<br /> complete list of properties</Heading>
        <Text>
          Find the ideal property that is most suitable for you. Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Text>
      </VStack>
      <Grid pb={8} pt={20} templateColumns='repeat(3, 1fr)' gap={10}>
          <GridItem p={4} boxShadow='md' rounded='md' w='100%'>
            <Icon color={"mainColor"} fontSize={"4rem"} as={FaBuilding} />
            <Heading pt={4} w={"100%"} textAlign={"left"} fontSize={"1.2rem"}>
              Find your ideal office
            </Heading>
            <Text pt={2}>
              Whether it's a private space or an entire floor for your organization, discover many customizable options.
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


