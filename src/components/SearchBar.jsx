import { HStack, Select, Text, Switch, Input } from "@chakra-ui/react";
import FilterMenu from "./FilterMenu";


const SearchBar = () => {
    return(
      <HStack flexDirection={{base:"column", md:"row"}} py={4} w={"100%"} justifyContent={"space-between"} gap={10}>
          <Select placeholder='Type of Office'>
            <option value='option1'>Private</option>
            <option value='option2'>Co-Work</option>
            <option value='option3'>Full Office</option>
          </Select>
          <Select placeholder='Ubicación'>
            <option value='option1'>No Furnishings</option>
            <option value='option2'>Basic</option>
            <option value='option3'>Full</option>
          </Select>
          <Input
          size="md"
          type="date"
          placeholder="Select Date and Time"
          />
          <Text>
            Amenities
          </Text>
          <Switch />
          <FilterMenu />
      </HStack>
    )
}

export default SearchBar;