// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="movie-heading">Action Movies</h1>
        <MovieSlider movieList={actionMoviesList} />
        <h1 className="movie-heading">Comedy Movies</h1>
        <MovieSlider movieList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
