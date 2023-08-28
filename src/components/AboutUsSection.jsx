import { Heading, VStack, Text, Grid, GridItem, Icon } from "@chakra-ui/react"
import { PiCoffeeFill } from "react-icons/pi";
import { GiTie, GiDesk } from "react-icons/gi";

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
            <Icon fontSize={"2rem"} as={GiTie} />
            <Heading pt={4} w={"100%"} textAlign={"left"} fontSize={"1.2rem"}>
              Find your Dream House
            </Heading>
            <Text pt={2}>
            Swwwing-State utilizes advanced algorithms and expert agents to streamline your property search and match you with your dream home.
            </Text>
          </GridItem>
          <GridItem p={4} boxShadow='md' rounded='md' w='100%'>
          <Icon fontSize={"2rem"} as={GiDesk} />
          <Heading pt={4} w={"100%"} textAlign={"left"} fontSize={"1.2rem"}>
            Find a place of business
          </Heading>
          <Text pt={2}>
            Swwwing-State leverages market insights and investment expertise to assist you in finding the perfect property for business ventures and entrepreneurship
            </Text>
          </GridItem>
          <GridItem p={4} boxShadow='md' rounded='md' w='100%'>
          <Icon fontSize={"2rem"} as={PiCoffeeFill} />
          <Heading pt={4} w={"100%"} textAlign={"left"} fontSize={"1.2rem"}>
            Rentals Services
          </Heading>
            <Text pt={2}>
            Swwwing-State offers a user-friendly platform with a wide range of rental property options to meet your needs.
            </Text>
          </GridItem>
      </Grid>
    </VStack>
  )
}

export default AboutUsSection


