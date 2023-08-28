import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Heading, VStack, Link, Box, Image, Text, Divider } from "@chakra-ui/react";

const BlogSection = () => {
  return (
    <VStack pb={20} px={12} alignItems={"flex-start"}>
      <HStack width={"100%"} justifyContent={"space-between"}>
        <Box>
          <Heading pb={4} letterSpacing={4} color={"blue.300"} fontSize={"1rem"}>
            BLOGS
          </Heading>
          <Heading>
            Articles Related to<br /> Aesthetic Home Design
          </Heading>
        </Box>
        <Link href='https://chakra-ui.com' isExternal>
          Explore All Blogs <ExternalLinkIcon mx='2px' />
        </Link>
      </HStack>
      <HStack gap={8} pt={12} w={"100%"} alignItems={"flex-start"} justifyContent={"space-between"}>
        <VStack w={"50%"} justifyContent={"space-between"}  alignItems={"flex-start"}> 
          <Image borderRadius={20} src='https://picsum.photos/id/164/600/300' alt='House Photo' />
          <Text>
            August 20, 2023
          </Text>
          <Heading fontSize={"1.5rem"}>
            Unlocking Opportunities in<br/> Real Estate Bussiness 
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam id iste labore officiis in beatae, provident cumque? Earum sapiente quaerat culpa praesentium repellat qui aperiam laborum autem temporibus ab!
          </Text>
        </VStack>
        <VStack gap={4} justifyContent={"space-between"} w={"50%"} alignItems={"flex-start"}>
          <HStack alignItems={"flex-start"}>
            <Image pr={2} borderRadius={20} src='https://picsum.photos/id/299/200/100' alt='House Photo' />
            <Box>
              <Text>
                August 20, 2023
              </Text>
              <Heading fontSize={"1rem"}>
              Unlocking Opportunities in<br /> Real Estate Bussiness 
              </Heading>
              <Text>
                The real estate industry is more than just buying and selling properties; it's about unlocking opportunities.
              </Text>
            </Box>
          </HStack>
          <Divider />
          <HStack alignItems={"flex-start"}>
            <Image pr={2} borderRadius={20} src='https://picsum.photos/id/315/200/100' alt='House Photo' />
            <Box>
              <Text>
                August 20, 2023
              </Text>
              <Heading fontSize={"1rem"}>
              Unlocking Opportunities in<br /> Real Estate Bussiness 
              </Heading>
              <Text>
                The real estate industry is more than just buying and selling properties; it's about unlocking opportunities.
              </Text>
            </Box>
          </HStack>
          <Divider />
          <HStack alignItems={"flex-start"}>
            <Image pr={2} borderRadius={20} src='https://picsum.photos/id/372/200/100' alt='House Photo' />
            <Box>
              <Text>
                August 20, 2023
              </Text>
              <Heading fontSize={"1rem"}>
              Unlocking Opportunities in<br /> Real Estate Bussiness 
              </Heading>
              <Text>
                The real estate industry is more than just buying and selling properties; it's about unlocking opportunities.
              </Text>
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default BlogSection;