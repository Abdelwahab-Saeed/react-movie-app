

const INITIAL_VALUE = {
    favourites: []
}


export default function handleFavourites(status = INITIAL_VALUE, action) {

    switch(action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...status,
                favourites: [...status.favourites, action.payload]
            }
        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...status,
                favourites: status.favourites.filter((movie) => movie.id !== action.payload)
            }
        default: {
            return status
        }
    }
}
