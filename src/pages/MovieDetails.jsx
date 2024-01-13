import AdditionalInformationList from "components/PageParts/AdditionalInformationList"
import Button from "components/PageParts/Button"
import Container from "components/PageParts/Container"
import Hero from "components/PageParts/Hero"
import MovieDescription from "components/PageParts/MovieDescription"
import Section from "components/PageParts/Section"
import { getMovieId } from "components/api/movies"
import { useEffect, useRef, useState } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"


const MovieDetails = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState(null)
    // const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const location = useLocation();
    const backLink = location.state?.from ?? '/';
    const backLinkRef = useRef(backLink);

    useEffect(() => {
        const getMovie = async () => {
            try {
                // setError('')
                setLoading(true)
                const data = await getMovieId(movieId)
                setMovie(data)
             
            } catch (error) {
                console.error(error)
                // setError(error)
            } finally {
                setLoading(false)
            }
        }

        movieId && getMovie()
        
    }, [movieId])


    return (
        <>
            <Hero>
                <Container>
                    <Button to={backLinkRef.current} />
                    {loading && <h1>Loading...</h1>}
                    {movie !== null && <MovieDescription movie={movie} />}
                </Container>
            </Hero> 
            <Section>
                <Container>
                    <AdditionalInformationList />
                    <Outlet />
                </Container>
            </Section> 
        </>   
    )
}

export default MovieDetails