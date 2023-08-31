import { Popover, PopoverTrigger, Button, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const PopUpBtn = ( {btnName} ) => {
  return (
    <Popover> 
      <PopoverTrigger>
        <Button  _hover={{ bg: 'mainColor' }} px={8} color={"whiteAlpha.900"} borderRadius={"20px"} backgroundColor={"blackAlpha.900"}>{btnName}</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
        <PopoverArrow />
          <PopoverHeader>Header</PopoverHeader>
          <PopoverCloseButton />
        <PopoverBody>
          <Button colorScheme='blue'>Button</Button>
        </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default PopUpBtn;