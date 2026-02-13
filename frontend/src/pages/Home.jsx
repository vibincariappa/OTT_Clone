import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import { useState } from "react";  
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Shawshank Redemption", release_date: "1994-09-23" }, 
        { id: 2, title: "Godfather", release_date: "1972-03-14" }, 
        { id: 3, title: "The Dark Knight", release_date: "2008-07-18" }
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

