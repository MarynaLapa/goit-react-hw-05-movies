import { getCredits } from "components/api/movies"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CastList from "./CastList"


const Cast = () => {
  const { movieId } = useParams()
  const [cast, setCast] = useState(null)
  // const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const getCast = async () => {
      try {
        // setError('')
        setLoading(true)
        const data = await getCredits(movieId)
        setCast(data.cast)
             
      } catch (error) {
        console.error(error)
        // setError(error)
      } finally {
        setLoading(false)
      }
    }

    movieId && getCast()
   
  }, [movieId])

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {cast !== null && <CastList cast={cast} />}
    </>    
  )
}

export default Cast