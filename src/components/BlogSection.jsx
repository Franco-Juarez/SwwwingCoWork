import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Heading, VStack, Link, Box, Image, Text, Divider } from "@chakra-ui/react";
import office1 from "../assets/blogSectionImg/1.jpg"
import office2 from "../assets/blogSectionImg/2.jpg"
import office3 from "../assets/blogSectionImg/3.jpg"
import office4 from "../assets/blogSectionImg/4.jpg"

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
          <Image borderRadius={20} src={office1} alt='House Photo' />
          <Text>
            August 22, 2023
          </Text>
          <Heading fontSize={"1.5rem"}>
            The Rise of Coworking Spaces 
          </Heading>
          <Text>
            Explore the growth and evolution of coworking spaces and how they are changing the traditional office landscape.
          </Text>
        </VStack>
        <VStack gap={3} justifyContent={"space-between"} w={"50%"} alignItems={"flex-start"}>
          <HStack alignItems={"flex-start"}>
            <Image w={"30%"} pr={2} borderRadius={20} src={office2} alt='House Photo' />
            <Box>
              <Text>
                August 18, 2023
              </Text>
              <Heading fontSize={"1rem"}>
                Office Design Trends for Productivity
              </Heading>
              <Text>
                Delve into the latest office design trends that boost productivity and create a conducive work environment.
              </Text>
            </Box>
          </HStack>
          <Divider />
          <HStack alignItems={"flex-start"}>
            <Image w={"30%"} pr={2} borderRadius={20} src={office3} alt='House Photo' />
            <Box>
              <Text>
                August 15, 2023
              </Text>
              <Heading fontSize={"1rem"}>
                Remote Job Interviews: Nailing the Virtual Meeting
              </Heading>
              <Text>
                Provide insights into acing remote job interviews and showcasing employability skills online.
              </Text>
            </Box>
          </HStack>
          <Divider />
          <HStack alignItems={"flex-start"}>
            <Image w={"30%"} pr={2} borderRadius={20} src={office4} alt='House Photo' />
            <Box>
              <Text>
                July 18, 2023
              </Text>
              <Heading fontSize={"1rem"}>
                Strategies for Boosting Productivity
              </Heading>
              <Text>
              Explore effective techniques for combating procrastination and maximizing productivity in shared workspaces.
              </Text>
            </Box>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default BlogSection;