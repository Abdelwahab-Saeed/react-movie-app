import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux"

export default function MyCard( {film}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const toggleFavorite = (e) => {
    e.preventDefault(); 
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: film.id });
    } else {
      dispatch({ type: 'ADD_TO_FAVOURITES', payload: film });
    }
  };

  return (
    <div className="col mb-4">
      <div className="card film-card h-100 border-0 bg-dark position-relative">
        <Link to={`/movies/${film.id}`} className="text-decoration-none">
          <div className="card-img-container" style={{ height: '500px', overflow: 'hidden' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.title}
              className="card-img-top h-100 w-100 object-fit-cover"
            />
          </div>
        </Link>

        <button
          className="position-absolute top-0 end-0 m-2 btn btn-sm btn-transparent p-0 border-0"
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <FaHeart className="text-danger fs-4" />
          ) : (
            <FaRegHeart className="text-white fs-4" />
          )}
        </button>

        <div className="card-body d-flex flex-column bg-dark text-light">
          <h5 className="card-title text-truncate">{film.title}</h5>
          <p className="card-text mt-auto">{new Date(film.release_date).getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}
