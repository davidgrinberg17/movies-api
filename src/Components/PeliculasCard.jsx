import "./PeliculasCard.css"
import { Link } from "react-router-dom"

export const PeliculasCard = ({peliculaProp}) => {

    const imgURL= `https://image.tmdb.org/t/p/w300${peliculaProp.poster_path}`

    return(
        <li className="movieCard">
            <Link to={`/pelicula/${peliculaProp.id}`}>
                <div>{peliculaProp.title}</div>
                <img className="movieImage" src={imgURL} alt={peliculaProp.title} />
            </Link>
        </li>
    )
}