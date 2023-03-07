import React from 'react'

const Navbar = () => {
  return (
    <ul style={{
        width: "100%",
        height:"50",
        border:"2px solid",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",

    }}>
        <li style={{listStyle:"none" }} >Inicio</li>
        <li style={{listStyle:"none" }} >Nosotros</li>
        <li style={{listStyle:"none" }}  >Contactos</li>
    </ul>
  )
}

export default Navbar