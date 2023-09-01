import { HStack, Heading, VStack, Box, Image, Text, Divider, Flex } from "@chakra-ui/react";
import office1 from "../assets/blogSectionImg/1.jpg"
import office2 from "../assets/blogSectionImg/2.jpg"
import office3 from "../assets/blogSectionImg/3.jpg"
import office4 from "../assets/blogSectionImg/4.jpg"
import { ArrowForwardIcon } from "@chakra-ui/icons";

const BlogSection = () => {
  return (
    <VStack 
    id="blog" 
    py={20} px={{base: 4, lg:12}} 
    width={"90%"}
    margin={"0 auto"} 
    alignItems={"flex-start"}>
      <HStack flexDirection={{base:"column", md:"row"}} width={"100%"} justifyContent={"space-between"}>
        <Box>
          <Heading fontFamily={"body"} color={"secondaryColor"} textAlign={{base: "center", md:"left"}}  pb={4} letterSpacing={4} fontSize={"1rem"}>
            BLOG
          </Heading>
          <Heading textAlign={{base: "center", md:"left"}} >
            Descubre las tendencias <br/> en Gestión Laboral y Coworking
          </Heading>
        </Box>
      </HStack>
      <HStack flexDirection={{base:"column", lg:"row"}} gap={8} pt={12} w={"100%"} alignItems={"flex-start"} justifyContent={"space-between"}>
        <VStack w={{base:"100%",lg:"50%"}} justifyContent={"space-between"}  alignItems={"flex-start"}> 
          <Image borderRadius={20} src={office1} alt='House Photo' />
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Text>
              Agosto 22, 2023
            </Text>
            <ArrowForwardIcon fontSize={"20px"} />
          </Flex>
          <Heading fontSize={"1.5rem"}>
            El Auge de los Espacios de Coworking
          </Heading>
          <Text>
            Explora el crecimiento y la evolución de los espacios de coworking y cómo están cambiando el panorama de las oficinas tradicionales.
          </Text>
        </VStack>
        <VStack w={{base:"100%",lg:"50%"}}  gap={3} justifyContent={"space-between"}  alignItems={"flex-start"}>
          <HStack flexDirection={{base:"column", lg:"row"}}  alignItems={"flex-start"}>
            <Image w={{base:"100%",lg:"30%"}} pr={2} borderRadius={20} src={office2} alt='House Photo' />
            <Box>
              <Flex w={"100%"} justifyContent={"space-between"}>
                <Text>
                  Agosto 18, 2023
                </Text>
                <ArrowForwardIcon fontSize={"16px"} />
              </Flex>
              <Heading fontSize={"1rem"}>
                Tendencias en Diseño de Oficinas para la Productividad
              </Heading>
                <Text>
                  Adéntrate en las últimas tendencias en diseño de oficinas que impulsan la productividad y crean un entorno de trabajo propicio.
                </Text>
            </Box>
          </HStack>
          <Divider />
          <HStack flexDirection={{base:"column", lg:"row"}} alignItems={"flex-start"}>
            <Image w={{base:"100%",lg:"30%"}} pr={2} borderRadius={20} src={office3} alt='House Photo' />
            <Box>
              <Flex w={"100%"} justifyContent={"space-between"}>
                <Text>
                  Agosto 15, 2023
                </Text>
                <ArrowForwardIcon fontSize={"16px"} />
              </Flex>       
              <Heading fontSize={"1rem"}>
                Entrevistas de Trabajo Remotas: Triunfando en la Reunión Virtual
              </Heading>
              <Text>
                Cómo tener éxito en las entrevistas de trabajo remotas y mostrar habilidades de empleabilidad en línea.
              </Text>
            </Box>
          </HStack>
          <Divider />
          <HStack flexDirection={{base:"column", lg:"row"}} alignItems={"flex-start"}>
            <Image w={{base:"100%",lg:"30%"}} pr={2} borderRadius={20} src={office4} alt='House Photo' />
            <Box>
              <Flex w={"100%"} justifyContent={"space-between"}>
                <Text>
                  Julio 18, 2023
                </Text>
                <ArrowForwardIcon fontSize={"16px"} />
              </Flex>       
              <Heading fontSize={"1rem"}>
                Estrategias para Aumentar la Productividad
              </Heading>
              <Text>
                Explora técnicas efectivas para combatir la procrastinación y maximizar la productividad en espacios de trabajo compartidos.
              </Text>
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default BlogSection;