import React, { useState, useEffect } from 'react';


export default function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [watchlist, setWatchlist] = useState([]);

  // Fetch movies from API when the component mounts
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&sort_by=popularity.desc`)
    .then(resp => resp.json())
    .then(resp => setMovies(resp.data.results))
  }, []);

  // Search for movies when the user enters a search query
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchQuery}`)
    .then(resp => resp.json())
    .then(resp => setMovies(resp.data.results))
  }, [searchQuery]);

  // Add a movie to the watchlist
  function addToWatchlist(movie) {
    setWatchlist([...watchlist, movie]);
    localStorage.setItem('watchlist', JSON.stringify([...watchlist, movie]));
  }

  // Remove a movie from the watchlist
  function removeFromWatchlist(movie) {
    const updatedWatchlist = watchlist.filter((m) => m.id !== movie.id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  }

  // Render the movie search results and watchlist
  return (
    <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center mb-8">
                <img src="/netflix-logo.png" alt="Netflix logo" className="w-12 mr-4" />
                <h1 className="text-3xl font-bold">Movie Recommendations</h1>
            </div>
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search for a movie"
                    className="bg-gray-800 text-white px-4 py-2 w-full rounded-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <ul className="grid grid-cols-2 gap-4">
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded-lg shadow-lg hover:opacity-75 transition-opacity duration-300"
                        />
                        <div className="mt-4">
                            <h3 className="text-lg font-bold">{movie.title}</h3>
                            <p   
                                className="text-gray-400">{movie.overview}</p>
                                 {watchlist.find((m) => m.id === movie.id) ? (
                                <button
                                     className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-red-600"
                                    onClick={() => removeFromWatchlist(movie)}
                                >
                                    Remove from Watchlist
                                </button>
                            ) : (
                                <button
                                    className="bg-white text-black px-4 py-2 rounded-full mt-4 hover:bg-gray-200"
                                    onClick={() => addToWatchlist(movie)}>
                                    Add to Watchlist
                                </button>
                             )}
                         </div>
                    </li>
                ))}
            </ul>
            <h2 className="text-2xl font-bold mb-4 mt-8">Watchlist</h2>
                {watchlist.length === 0 ? (
                <p>You haven't added any movies to your watchlist yet.</p>
            ) : (
                <ul className="grid grid-cols-2 gap-4">
                    {watchlist.map((movie) => (
                        <li key={movie.id}>
                            <img
                                 src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                 alt={movie.title}
                                 className="rounded-lg shadow-lg hover:opacity-75 transition-opacity duration-300"
                                />
                            <div className="mt-4">
                                 <h3 className="text-lg font-bold">{movie.title}</h3>
                                <p className="text-gray-400">{movie.overview}</p>
                                <button
                                 className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-red-600"
                                onClick={() => removeFromWatchlist(movie)}
                                >
                                 Remove from Watchlist
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
)
}