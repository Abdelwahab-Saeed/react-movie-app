import { useSelector, useDispatch } from "react-redux";
import MyCard from '../components/MyCard';
import Navbar from "../components/Navbar";

export default function Favourites() {

    const movies = useSelector((state) => state.favourites.favourites);
    console.log(movies);

  return (
    <>
        <div className="container fav" >

            <Navbar />
            {movies.length > 0 ? 
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 g-4">

            {  movies.map((movie) => (
                <MyCard key={movie.id} film={movie} />
            )) }</div> : <p className="text-white text-center fs-3  mt-5">No Favourites at the time.</p>}
              
        </div>
    </>
  )
}

