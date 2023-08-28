import { HStack, VStack, Text, Icon, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { BsInstagram, BsTelegram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <VStack alignItems={"stretch"} backgroundColor={"blackAlpha.900"} px={12} pt={16} pb={4}>
    <HStack alignItems={"flex-start"} justifyContent={"space-between"} color={"whiteAlpha.900"} as={"footer"}>
      <VStack alignItems={"flex-starts"}>
        <Heading pb={2} fontSize="lg">
          SwwwingState
        </Heading>
        <Text py={2} fontSize="sm">
        <UnorderedList listStyleType={"none"} m={0}>
          <ListItem> 
            Pfeifergasse 13, Butzbach
          </ListItem>
          <ListItem>
          Bergheimer Strasse 76, Heidelberg
          </ListItem>
          <ListItem>
          Schlossstrasse 16, Aachen
          </ListItem>
        </UnorderedList>
        </Text>
        <HStack py={2} gap={8} fontSize={"1.5rem"}>
          <Icon as={BsInstagram} />
          <Icon as={BsTelegram} />
          <Icon as={BsLinkedin} />
          <Icon as={BsTwitter} />
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