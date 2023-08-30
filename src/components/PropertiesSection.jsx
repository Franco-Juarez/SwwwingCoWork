import { VStack, HStack, Box, Heading, Grid } from "@chakra-ui/react"
import PropertiesCards from "./PropertiesCards";
import properties from "../data/Properties.json";
import SearchBar from "./SearchBar";


const PropertiesSection = () => {
  return (
    <VStack pb={20} px={{base:4, lg:12}} width={"100%"} alignItems={{base:"center", md:"flex-start"}}>
        <HStack pb={4} width={"100%"} justifyContent={{base: "center", md:"space-between"}}>
          <Box>
            <Heading textAlign={{base: "center", md:"left"}} pb={4} letterSpacing={4} color={"blue.300"} fontSize={"1rem"}>
              OFICINAS
            </Heading>
            <Heading textAlign={{base: "center", md:"left"}} >
              Propiedades disponibles en Latinoamérica
            </Heading>
          </Box>
        </HStack>
        <SearchBar />
      <Grid 
      pt={8}
      w={"100%"}
      templateColumns={{xl:'repeat(4, 1fr)', lg:'repeat(3, 1fr)', md:'repeat(2, 1fr)', base:'repeat(1, 1fr)'}}
      gap={8}>
        {
          properties.map(property =>
          {
            return <PropertiesCards key={property.id} propertydescripcion = {property.descripcion} propertyImage = {property.image} propertyPrice = {property.precio} propertyLocation = {property.ubicacion} propertyName = {property.nombre} />
          })
        }
      </Grid>
    </VStack>
  )
}

export default PropertiesSection;