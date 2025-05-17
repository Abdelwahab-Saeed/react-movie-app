import axios from "axios"



export const getMoviesList = () => (dispatch) => {
    
    return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6a1cabb5e93fd6605356ead9aa9712dd&language=en-US&page=1")
     .then( (res) => 
        dispatch({
            type: "GET_MOVIES_LIST",
            payload: res.data.results
        })
    )
    .catch((err) => console.log(err));
}