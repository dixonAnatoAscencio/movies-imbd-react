import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



//Aca creamos los endpoints

const headers = {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
	"x-rapidapi-key": "88b27d1cebmsh1c875fc545b2fc2p1857a1jsna6c01285b7f7"
} 

export const moviesApi = createApi({
    reducerPath:'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl:"https://imdb8.p.rapidapi.com" }),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url:`/title/find?q=${title}`,
                method: 'GET', 
                headers
            }) 
        }),
    })
});

export const { useFetchMoviesQuery } = moviesApi