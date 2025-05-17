export const addToFavourites = (movie) => {
    return {
        type: 'ADD_TO_FAVOURITES',
        payload: movie
    }
};

export const removeFromFavourites = (id) => {
    return {
        type: 'REMOVE_FROM_FAVOURITES',
        payload: id
    }
};