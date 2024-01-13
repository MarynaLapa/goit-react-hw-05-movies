import Container from 'components/PageParts/Container';
import { MoviesList } from 'components/PageParts/MoviesList';
import PageTitle from 'components/PageParts/PageTitle';
import { getAllMovies } from 'components/api/movies'
import React, { useEffect, useState } from 'react'
import Section from 'components/PageParts/Section';

const Home = () => {
    const [movies, setMovies] = useState([]);
    // const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                // setError('')
                setLoading(true)
                const data = await getAllMovies()
                setMovies(data.results)
             
            } catch (error) {
                console.error(error)
                // setError(error)
            } finally {
                setLoading(false)
            }
        }
        getTrendingMovies()
    }, [])

    return (
        <Section>
            <Container>
                <PageTitle title={'Trending today'} />
                {loading && <h1>Loading...</h1>}
                <MoviesList movies={movies}/>
            </Container>
      </Section>
      
  )
}

export default Home