import MovieCard from "../components/MovieCard";
import { useState } from "react";  

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Shawshank Redemption", releaseDate: "1994-09-23", rating: 9.3, posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" }, 
        { id: 2, title: "Godfather", releaseDate: "1972-03-14", rating: 9.2, posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja.jpg" }, 
        { id: 3, title: "The Dark Knight", releaseDate: "2008-07-18", rating: 9.0, posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" }
    ];

    const handleSearch = () => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };
    

return(
    <div className="home">
        <form onSubmit = {handleSearch} clasName = "Search-form">
            <input 
                type = "text" 
                placeholder = "Search for movies..." 
                className="search-input"
                value = {searchQuery}
                onChange = {(e) => setSearchQuery(e.target.value)}
            />
            <button type = "submit" className="search-button">Search</button>
        </form>

        <div className="movie-grid">
            {movies.map(movie => (
                movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard key={movie.id} movie={movie} />)
            ))} 
        </div> 
        </div>
    );
}

export default Home;

