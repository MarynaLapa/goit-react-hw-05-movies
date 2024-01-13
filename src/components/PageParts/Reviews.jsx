import { getReviews } from "components/api/movies"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReviewsList from "./ReviewsList"

const Reviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        console.log(movieId)
        // setError('')
        setLoading(true)
        const {results} = await getReviews(movieId) 
        setReviews(results)    
      } catch (error) {
        console.error(error)
        // setError(error)
      } finally {
        setLoading(false)
      }
    }

    movieId && getMovieReviews()

  }, [movieId])
  
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {reviews!==null && !loading ? <ReviewsList reviews={reviews}/> : <p>We don't have any reviews for this movie.</p>}
    </>
  )
}

export default Reviews