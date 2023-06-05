import "./Movielist.css";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            <div className="container-fluid box">
                {props.movies.map((movie, index) => (
                    <div className="image-container">

                        <img src={movie.Poster} alt="movie" height={'300px'} />
                        <div
                            onClick={() => props.handleFavouritesClick(movie)}
                            className="overlay d-flex align-item-center justify-content-center"
                        >
                            <FavouriteComponent />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieList; 