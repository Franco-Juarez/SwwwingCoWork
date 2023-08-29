import { HStack, VStack, Text, Icon, UnorderedList, ListItem, Image, Link } from "@chakra-ui/react";
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import logoWhite from "../assets/logo_white.png"
const Footer = () => {
  return (
    <VStack alignItems={"stretch"} backgroundColor={"blackAlpha.900"} px={12} pt={16} pb={4}>
    <HStack alignItems={"flex-start"} justifyContent={"space-between"} color={"whiteAlpha.900"} as={"footer"}>
      <VStack alignItems={"flex-starts"}>
        <Image maxW={"120px"} src={logoWhite} />
        <Text py={2} fontSize="sm">
        <UnorderedList listStyleType={"none"} m={0}>
          <ListItem> 
            123 Park Avenue, Suite 450, Nueva York, NY 10001
          </ListItem>
          <ListItem>
            567 Tech Plaza, 5th Floor, Brooklyn, NY 11234
          </ListItem>
          <ListItem>
            789 Financial Tower, Financial District, NY 10005
          </ListItem>
        </UnorderedList>
        </Text>
        <HStack py={2} gap={8} fontSize={"1.5rem"}>
          <Link href='https://www.instagram.com/swwwing.ok/' isExternal>
            <Icon ex  as={BsInstagram} />
          </Link>
          <Link href='https://www.linkedin.com/company/swwwing/' isExternal>
            <Icon as={BsLinkedin} />
          </Link>
        </HStack>
      </VStack>
      <HStack gap={12} alignItems={"flex-starts"}>
        <UnorderedList display={"flex"} flexDirection={"column"} justifyContent={"space-between"} m={0} listStyleType={"none"}>
          <ListItem pb={4}>
            Home
          </ListItem>
          <ListItem pb={4}>
            For Sale
          </ListItem>
          <ListItem pb={4}>
            Incomes
          </ListItem>
          <ListItem pb={4}>
            Blog
          </ListItem>
        </UnorderedList>
        <UnorderedList display={"flex"} flexDirection={"column"} justifyContent={"space-between"} m={0} listStyleType={"none"}>
          <ListItem pb={4}>
            FAQs
          </ListItem>
          <ListItem pb={4}>
            Privacy Policy
          </ListItem>
          <ListItem pb={4}>
            Terms & Conditions
          </ListItem>
          <ListItem pb={4}>
            Contact Us
          </ListItem>
        </UnorderedList>
        <UnorderedList display={"flex"} flexDirection={"column"} justifyContent={"space-between"} m={0} listStyleType={"none"}>
          <ListItem pb={4}>
            Cookies Policy
          </ListItem>
          <ListItem pb={4}>
            Referral
          </ListItem>
          <ListItem pb={4}>
            New Property
          </ListItem>
          <ListItem pb={4}>
            For Rent
          </ListItem>
        </UnorderedList>
      </HStack>
    </HStack>
    <HStack pt={4} justifyContent={"center"} color={"whiteAlpha.900"}>
      <Text fontSize={".8rem"}>
      © Swwwing Agency 2023 - All rights reserved
      </Text>
    </HStack>
    </VStack>
  )
}

export default Footer;