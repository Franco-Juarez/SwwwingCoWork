import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: "'Unbounded Variable', sans-serif",
    body: `'Quicksand Variable', sans-serif`,
  },
  colors: {
    mainColor: "#F5A524",
    secondaryColor: "#343E63"
  }
})

export default theme