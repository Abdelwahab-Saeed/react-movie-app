import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux"
import { useContext } from 'react';
import { LanguageContext } from '../Context/Lang';

export default function Navbar() {

  const {myContextLang, setMyContextLang} = useContext(LanguageContext);

  const movies = useSelector((state) => state.favourites.favourites);
  console.log(movies.length);
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark text-white p-3">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/movies">Muvasa</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div className="navbar-nav d-flex  gap-3 justify-content-between">
                      <Link className="nav-link text-white" aria-current="page" to="/movies">Home</Link>
                      
                    </div> 
                </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-end gap-3">
                  <div className="d-flex align-items-center justify-content-end gap-3">
                    <h2>{ myContextLang}</h2>
                    <select className="form-select text-white" value={myContextLang} onChange={(e) => setMyContextLang(e.target.value)}>
                      <option value="en" >English</option>
                      <option value="ar">Arabic</option>
                    </select>
                  </div>
                  <Link className="nav-link text-white" to="/login">Login</Link>
                  <Link className="nav-link text-white" to="/register">Register</Link>
                  <Link className="nav-link text-white" to="/favourites">Favourites({movies.length})</Link>
            </div>
        </nav>
    </>
  )
}
