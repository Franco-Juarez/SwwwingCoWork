import { VStack, HStack, Box, Heading, Grid } from "@chakra-ui/react"
import PropertiesCards from "./PropertiesCards";
import properties from "../data/Properties.json";
import SearchBar from "./SearchBar";


const PropertiesSection = () => {
  return (
    <VStack pb={20} px={12} width={"100%"} alignItems={"flex-start"}>
        <HStack pb={4} width={"100%"} justifyContent={"space-between"}>
          <Box>
            <Heading pb={4} letterSpacing={4} color={"blue.300"} fontSize={"1rem"}>
              PROPERTIES
            </Heading>
            <Heading>
              Properties in Cities <br /> and Provinces in Argentina
            </Heading>
          </Box>
        </HStack>
        <SearchBar />
      <Grid 
      pt={8}
      w={"100%"}
      templateColumns='repeat(4, 1fr)'
      gap={8}>
        {
          properties.map(property =>
          {
            return <PropertiesCards key={property.id} propertydescripcion = {property.descripcion} propertyPrice = {property.precio} propertyLocation = {property.ubicacion} propertyName = {property.nombre} />
          })
        }
      </Grid>
    </VStack>
  )
}

export default PropertiesSection;