import { HStack } from '@chakra-ui/react';
import { useEffect } from 'react';


const Filter = () => {

const flag = true;

const filtro = new Promise((resolve, reject) => {
    flag ? resolve("tarea resuelta") : reject("tarea no resuelta");
})

useEffect(() => {
    filtro.then((res) => {
    console.log(res);
    }).catch((err) => {
    console.error(err);
    })
}, [])
    

return (
    <HStack>
        <HStack>
            
        </HStack>
    </HStack>
)
};

export default Filter;
