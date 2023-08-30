import { Heading, VStack, Text, Grid, GridItem, Icon } from "@chakra-ui/react"
import { FaBuilding, FaPrint, FaMugHot } from "react-icons/fa6";

const AboutUsSection = () => {
  return (
    <VStack alignItems={"flex-start"} p={{base:4, md:12}} pt={{base: 8, md:12}}>
      <VStack alignItems={{base:"center", md:"flex-start"}} gap={4}>
          <Heading textTransform={"uppercase"} textAlign={{base: "center", md:"left"}} color={"blue.500"} fontSize="sm">Tu lugar de trabajo ideal</Heading>
          <Heading textAlign={{base: "center", md:"left"}} >Nuestros servicios</Heading>
        <Text textAlign={{base: "center", md:"left"}} >
          Mas de 1500 oficinas y espacios de coworking te esperan en nuestro amplio catálogo. Opciones personalizables que puedes adaptar a tus necesidades, con contacto directo con sus propietarios o arrendatarios.
        </Text>
      </VStack>
      <Grid pb={8} pt={20} templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', xl:'repeat(3, 1fr)'}} gap={10}>
          <GridItem p={4} boxShadow='md' rounded='md' w='100%'>
            <Icon color={"mainColor"} fontSize={"4rem"} as={FaBuilding} />
            <Heading pt={4} w={"100%"} textAlign={"left"} fontSize={"1.2rem"}>
              Encuentra la oficina perfecta:
            </Heading>
            <Text pt={2}>
              Ya sea un espacio privado o un piso completo para tu organización o empresa, descubre muchas opciones 100% personalizables
            </Text>
          </GridItem>
          <GridItem p={4} boxShadow='md' rounded='md' w='100%'>
          <Icon color={"mainColor"} fontSize={"4rem"} as={FaPrint} />
          <Heading pt={4} w={"100%"} textAlign={"left"} fontSize={"1.2rem"}>
            Adaptadas a tus necesidades:
          </Heading>
          <Text pt={2}>
            Oficinas premium, semi-amobladas o espacios vacíos que puedes cambiar según tus requerimientos cuando desees.
          </Text>
          </GridItem>
          <GridItem p={4} boxShadow='md' rounded='md' w='100%'>
          <Icon color={"mainColor"} fontSize={"4rem"} as={FaMugHot} />
          <Heading pt={4} w={"100%"} textAlign={"left"} fontSize={"1.2rem"}>
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


