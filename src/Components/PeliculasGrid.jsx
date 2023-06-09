import { PeliculasCard } from "./PeliculasCard"
import { get } from "../utils/httpCliente.js"
import { useState, useEffect } from "react"
import "./PeliculasGrid.css"

export const PeliculasGrid = () => {

    const [peliculas, setPeliculas] = useState([])

    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            setPeliculas(data.results);
        })
    },[])

    return(
        <ul className="moviesGrid">
            {peliculas.map((indicePelicula)=>(
                <PeliculasCard key={indicePelicula.id} peliculaProp={indicePelicula}/>
            ))}
        </ul>
    )
}