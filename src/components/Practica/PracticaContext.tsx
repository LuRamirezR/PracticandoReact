//import React from 'react'

import { GlobalProvider } from "../../context/global.provider"
import { Button, ColorRed } from "../Button/Button"

const PracticaContext = () => {
    const dimeHola = () => {
        alert("Hola!!")
    }
    
  return (
    <>
    <h3>Practica del Context</h3>
    <GlobalProvider>
        <ColorRed><Button parentMethod={dimeHola}>Mi boton rojo</Button> </ColorRed>
    </GlobalProvider>
    </>
  )
}

export default PracticaContext