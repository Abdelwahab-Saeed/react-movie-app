import { Link } from 'react-router-dom';

export default function Navbar() {
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
                      <Link className="nav-link text-white" to="/login">Login</Link>
                      <Link className="nav-link text-white" to="/register">Register</Link>
                    </div>
                    
                </div>
                </div>
            </div>
        </nav>
    </>
  )
}
