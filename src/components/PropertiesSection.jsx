import { VStack, HStack, Box, Heading, Grid, Button } from "@chakra-ui/react"
import PropertiesCards from "./PropertiesCards";
import properties from "../data/Properties.json";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import { useState } from 'react';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2
    }
  }
};

const PropertiesSection = () => {

  const [card, setCard] = useState(false);
  // const cardContainerRef = useRef(null);

  const sumarCards = () => {
    setCard(!card)
  }

  // useEffect(() => {
  //   if (!card) {
  //     cardContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [card]);

  return (
    <VStack
    py={12}
    as={motion.div}
    // ref={cardContainerRef}
    variants={container}
    initial="hidden"
    animate="visible"
    id="oficinas"
    backgroundColor={"blackAlpha.200"}
    >
    <VStack
    alignItems={{base:"center", md:"flex-start"}}
    margin={"0 auto"} 
    px={{base:4, lg:12}} 
    width={"90%"} 
    >
      <HStack pb={4} width={"100%"} justifyContent={{base: "center", md:"space-between"}}>
        <Box>
          <Heading textAlign={{base: "center", md:"left"}} pb={4} letterSpacing={4} fontFamily={"body"} color={"secondaryColor"}fontSize={"1rem"}>
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
    templateColumns={{"2xl":'repeat(4, 1fr)', xl:'repeat(3, 1fr)', md:'repeat(2, 1fr)', base:'repeat(1, 1fr)'}}
    justifyContent={"center"}
    alignItems={"center"}
    gap={8}>
      {
        properties.map(property =>
        {
          if (!card && property.id <= 6) {
            return <PropertiesCards
            key={property.id}
            propertydescripcion = {property.descripcion}
            propertyImage = {property.image}
            propertyPrice = {property.precio}
            propertyLocation = {property.ubicacion}
            propertyName = {property.nombre} 
            />
          }
          if (card) {
            return <PropertiesCards
            key={property.id}
            propertydescripcion = {property.descripcion}
            propertyImage = {property.image}
            propertyPrice = {property.precio}
            propertyLocation = {property.ubicacion}
            propertyName = {property.nombre} 
            />
          }     
        })
      }
    </Grid>
      <Button 
      onClick={sumarCards} 
      m={"0 auto"}
      _hover={{ bg: 'mainColor' }} 
      px={8}
      mt={4}
      color={"whiteAlpha.900"} 
      borderRadius={"20px"} 
      backgroundColor={"blackAlpha.900"}
      >
        {card ? "Ver menos" : "Ver más"}
      </Button>
    </VStack>
    </VStack>
  )
}

export default PropertiesSection;