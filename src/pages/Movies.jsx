import { getSearchMovie } from "components/api/movies"
import Container from "components/PageParts/Container"
import Form from "components/PageParts/Form"
import Hero from "components/PageParts/Hero"
import { MoviesList } from "components/PageParts/MoviesList"
import Section from "components/PageParts/Section"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


const Movies = () => {

  const [searchParams] = useSearchParams()

  const [listMovies, setListMovies] = useState([])
  const [page, setPage] = useState(1)
  const [isShowBtn, setIsShowBtn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isShowHero, setIsShowHero] = useState(true)
  const query = searchParams.get('search')
    
  const getSearch = async (q, page) => {
    try {

      setIsShowBtn(false)
      setLoading(false)
      
      const data = await getSearchMovie(q, page)

      setListMovies(data.results)
      // setListMovies((prev) =>
      //   prev && !q ? [...prev, ...data.results] : data.results
      // )
      // if (data.results.length < data.total_results&& data.results.length >= 20) setIsShowBtn(true)

    } catch (error) {
      console.log('error :>> ', error);
    } finally {
      setLoading(false)
      setIsShowHero(false)
    }
  }
  const handlerLoadMore1 = () => {
    setPage(prev => prev - 1)
  }

  const handlerLoadMore = () => {
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    if (!query) return;
    !query && setPage(1)
    getSearch(query, page)
  }, [query, page])
  
  return (
    <>
      {isShowHero &&
        <Hero>
          <Container>
            <Form />
          </Container>
        </Hero>
      }
      {loading && <h1>Loading...</h1>}
      {!isShowHero &&
        <Section>
          <Container>
            <Form />
            {listMovies.length > 0 && <MoviesList movies={listMovies} isShowBtn={isShowBtn} handlerLoadMore1={handlerLoadMore1} handlerLoadMore={handlerLoadMore} />}
          </Container>
        </Section>
      }
    </>
  )
}

export default Movies
// isShowBtn={isShowBtn} в MoviesList

