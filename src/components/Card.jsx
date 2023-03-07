import React from "react";


const Card = ({nombre, raza}) => {
  return(
    <div style={{
        width: "100%",
        height: "100px",
        border: "2px solid ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }} >
        <div style={{background:"green"}}> 
        <p>Tu mascota se llama {nombre} y es de raza {raza}</p>
       </div>
      
    </div>
  )
}


export default Card;