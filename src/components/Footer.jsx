import { HStack, VStack, Text, Icon, UnorderedList, ListItem, Image, Link, Grid, GridItem } from "@chakra-ui/react";
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import logoWhite from "../assets/logo_white.png"
const Footer = () => {
  return (
    <VStack alignItems={"stretch"} backgroundColor={"blackAlpha.900"} px={{base:4, lg:12}} pt={16} pb={4}>
      <Grid templateColumns={{base:'repeat(1, 1fr)', xl:'repeat(3, 1fr)'}} gap={2}  flexDirection={{base:"column", lg:"row"}} alignItems={{base:"center", lg:"flex-start"}} justifyContent={"space-between"} color={"whiteAlpha.900"} as={"footer"}>
        <GridItem>
          <VStack alignItems={{base: "center",lg:"flex-start"}}>
            <Image maxW={"120px"} src={logoWhite} />
          </VStack>
        </GridItem>
        <GridItem>
          <UnorderedList textAlign={"center"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} m={0} listStyleType={"none"}>
              <ListItem pb={4}>
                Servicios
              </ListItem>
              <ListItem pb={4}>
                Oficinas
              </ListItem>
              <ListItem pb={4}>
                Blog
              </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem>
          <VStack alignItems={"flex-end"}>
            <UnorderedList textAlign={{base: "center", lg:"right"}} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} m={0} listStyleType={"none"}>
              <ListItem pb={4}>
                Dirección ficticia
              </ListItem>
              <ListItem pb={4}>
                <Link isExternal href="mailto:swwwing.ar@gmail.com">swwwing.ar@gmail.com</Link>
              </ListItem>
            </UnorderedList>
            <HStack gap={4} fontSize={"1rem"}>
              <Link href='https://www.instagram.com/swwwing.ok/' isExternal>
                <Icon ex  as={BsInstagram} />
              </Link>
              <Link href='https://www.linkedin.com/company/swwwing/' isExternal>
                <Icon as={BsLinkedin} />
              </Link>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
      <HStack pt={4} justifyContent={"center"} color={"whiteAlpha.900"}>
        <Text fontSize={".8rem"}>
        © Swwwing Agency 2023 - All rights reserved
        </Text>
      </HStack>
    </VStack>
  )
}

export default Footer;