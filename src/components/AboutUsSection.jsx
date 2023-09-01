import { Heading, VStack, Text, Grid, GridItem, Icon } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { FaBuilding, FaPrint, FaMugHot } from "react-icons/fa6";

const AboutUsSection = () => {
  return (
    <VStack 
    id="servicios" 
    alignItems={"flex-start"} 
    p={{base:4, lg:12}} 
    py={{base: 10, md:12}}
    width={"90%"}
    margin={"0 auto"} 
    >
      <VStack alignItems={{base:"center", md:"flex-start"}} gap={4}>
          <Heading textTransform={"uppercase"} textAlign={{base: "center", lg:"left"}} fontFamily={"body"} color={"secondaryColor"} fontSize="sm">Tu lugar de trabajo ideal</Heading>
          <Heading textAlign={{base: "center", md:"left"}} >Nuestros servicios</Heading>
        <Text textAlign={{base: "center", md:"left"}} >
          Más de 1500 oficinas y espacios de coworking te esperan en nuestro amplio catálogo. Opciones personalizables que puedes adaptar a tus necesidades, con contacto directo con sus propietarios o arrendatarios.
        </Text>
      </VStack>
      <Grid py={10} templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', xl:'repeat(3, 1fr)'}} gap={10}>
          <GridItem 
          as={motion.div}
          whileHover={{ scale: 1.05}}
          whileTap={{ scale: 0.99}}
          p={4} 
          boxShadow='md' 
          rounded='md' 
          w='100%'>
            <Icon color={"mainColor"} fontSize={"4rem"} as={FaBuilding} />
            <Heading 
            color={"secondaryColor"}
            pt={4} 
            w={"100%"} 
            textAlign={"left"} 
            fontSize={"1.2rem"}>
              Encuentra la oficina perfecta:
            </Heading>
            <Text pt={2}>
              Ya sea un espacio privado o un piso completo para tu organización o empresa, descubre muchas opciones 100% personalizables
            </Text>
          </GridItem>
          <GridItem 
          as={motion.div}
          whileHover={{ scale: 1.05}}
          whileTap={{ scale: 0.99}}
          p={4} 
          boxShadow='md' 
          rounded='md' 
          w='100%'>
          <Icon color={"mainColor"} fontSize={"4rem"} as={FaPrint} />
          <Heading 
          color={"secondaryColor"}
          pt={4} w={"100%"} 
          textAlign={"left"} 
          fontSize={"1.2rem"}>
            Adaptadas a tus necesidades:
          </Heading>
          <Text pt={2}>
            Oficinas premium, semi-amobladas o espacios vacíos que puedes cambiar según tus requerimientos cuando desees.
          </Text>
          </GridItem>
          <GridItem 
          as={motion.div}
          whileHover={{ scale: 1.05}}
          whileTap={{ scale: 0.99}}
          p={4} 
          boxShadow='md' 
          rounded='md' 
          w='100%'>
          <Icon color={"mainColor"} fontSize={"4rem"} as={FaMugHot} />
          <Heading 
          color={"secondaryColor"}
          pt={4} w={"100%"} 
          textAlign={"left"} 
          fontSize={"1.2rem"}>
            Todo en un solo lugar:
          </Heading>
            <Text pt={2}>
              Contamos con espacios con amenities incluidos, como gimnasio, café, salas de recreación y más, para que no te falte nada.
            </Text>
          </GridItem>
      </Grid>
    </VStack>
  )
}

export default AboutUsSection


