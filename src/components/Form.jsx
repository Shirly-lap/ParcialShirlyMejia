import React, { useState } from 'react'
import Card from './Card'
import "./Formulario.css";
const Form = () => {
    const [animal, setAnimal] =useState({
        nombre: "",
        raza:   ""
    })

    const [Esperado, setEsperado] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(animal.nombre.length >= 3  && animal.nombre.charAt(0) !== " " && animal.raza.length >= 6) {
            setEsperado(true)
            setErr(false)
        } 
        else {
            setErr(true)
        }

    }


  return (
    <div>
        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre de tu mascota' value={animal.nombre} onChange={(e) => setAnimal({...animal, nombre: e.target.value})}/>
            <input type="text" placeholder='Raza de tu mascota' value={animal.raza} onChange={(e) => setAnimal({...animal, raza: e.target.value})}/>
            <input type="submit" />
            {err && "Por favor chequea que la información sea correcta"}
        </form>

            {Esperado && <Card nombre={animal.nombre} raza={animal.raza}/>}
    </div>
  )
}

export default Form