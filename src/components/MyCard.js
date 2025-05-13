import { Link } from 'react-router-dom';

export default function MyCard({ film }) {
  return (
    <div className="col mb-4">
      <div className="card film-card h-100 border-0 bg-dark">
        <Link to={`/movies/${film.id}`} className="text-decoration-none">
          <div className="card-img-container" style={{ height: '500px', overflow: 'hidden' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.title}
              className="card-img-top h-100 w-100 object-fit-cover"
            />
          </div>
        </Link>
        <div className="card-body d-flex flex-column bg-dark text-light">
          <h5 className="card-title text-truncate">{film.title}</h5>
          <p className="card-text mt-auto">{new Date(film.release_date).getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}