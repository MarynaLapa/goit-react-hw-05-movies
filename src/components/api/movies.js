import { api } from './api'

const API_KEY = 'fc33011482b7a30d34016cb3bfeca441';

export const getAllMovies = async () => {

	const { data } = await api(`/trending/movie/day?api_key=${API_KEY}&language=en-US`)

	return data
}

export const getMovieId = async (id) => {

	const { data } = await api(`/movie/${id}?api_key=${API_KEY}&language=en-US`)

	return data
}

export const getCredits = async (id) => {

	const { data } = await api(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)

	return data
}

export const getReviews = async (id) => {

	const { data }  = await api(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
	
	return data
}

//https://api.themoviedb.org/3/search/movie?api_key=fc33011482b7a30d34016cb3bfeca441&language=en-US&query=batman

export const getSearchMovie = async (query, page) => {
	console.log('query', query)
	const { data }  = await api(`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`)
	console.log('data', data)
	return data
}
