import { get } from "../utils/httpCliente.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const PeliculaDetalle = () => {
    
    const {peliculaId} = useParams()
    const [pelicula,setPelicula] = useState([null])

    useEffect (()=>{
        get(`/movies/${peliculaId}`).then((data)=>{
            setPelicula(data)
        })
    },[peliculaId])

    if(!pelicula){
        return null
    }

    const imgURL= `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
    return(
        <div className="contenedorDetalle">
            <img className="col" src={imgURL} alt={pelicula.title}></img>
        </div>
    )
}