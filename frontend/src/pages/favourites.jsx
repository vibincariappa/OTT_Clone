import "../css/Favorites.css"
import { useMovierContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite(){
    const { favourites } = useMovierContext();

    if (favourites){
        return (
        <div>
            <h2>Favorites</h2>
        <div className="movie-grid">
          {favourites.map(
            (movie) =>(
                <MovieCard key={movie.id} movie={movie} />
              ),
          )}
        </div>
        </div>
        );
    }
    return (
        <div className="favourites-empty">
            <h2>No favorites yet</h2>
            <p>Start adding movies to your favorites list!</p>
        </div>
    );
}

export default Favorite
