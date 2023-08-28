import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useState } from "react";



const MenuBtn = () => {

    const [isToggled, setIsToggled] = useState(false);

    return (
        <Button
        display={{base:"flex", lg:"none"}}
        flexDirection={"column"}
        _active={{background:"transparent"}}
        gap={2}
        p={0}
        backgroundColor={"transparent"}
        onClick={() => setIsToggled(!isToggled)}
        >
          <CloseIcon
            display ={isToggled ? 'block' : 'none'} />
          <HamburgerIcon 
          display ={isToggled ? 'none' : 'block'}   />
        </Button>
    )
}

export default MenuBtn;

