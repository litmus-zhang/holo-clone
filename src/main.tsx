import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const theme = extendTheme(
  // withDefaultColorScheme({
  //   colorScheme: 'brand.100',
  //   components: ['Button'],
  // })
  // , 
  {
    colors: {
      brand: {
        50: "#D7B9F5",
        500: "#8008f7",
        600: "#4C0098",
      },
    },
  })


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
