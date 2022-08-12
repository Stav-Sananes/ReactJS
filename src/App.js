import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MovieList from "./Components/Movie-List/movie-list";
import About from "./Pages/About";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
      .then((response) => response.json())
      .then((apiMovies) => {
        setMovies(apiMovies);
        setShowMovies(true);
      });
  }, []);

  const searchMovies = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchInput(search);
  };
  const filterMovies = movies.filter((movie) => {
    return movie.Title.toLocaleLowerCase().includes(searchInput);
  });
  let renderMovies = "Loading Movies...";

  if (showMovies) {
    renderMovies = <MovieList movies={filterMovies} />;
  }
  return (
    <div className="max-w-6xl mx-auto bg-slate-200">
      <div class="relative flex items-center justify-between mb-8 h-16 bg-yellow-500">
        <div class="flex items-center px-2 lg:px-0">
          <Link to={"/"} className="flex ml-2 text-2xl font-semibold">
            React Movie
          </Link>
          <div class="hidden lg:block lg:ml-2">
            <div class="flex">
              <Link
                to={`/about`}
                className="ml-4 px-3 py-2 rounded-md text-sm leading-5 text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700"
              >
                About
              </Link>
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="max-w-lg w-full lg:max-w-xs">
            <label for="search" class="sr-only">
              Search{" "}
            </label>
            <form methode="get" action="#" class="relative z-50">
              <button
                type="submit"
                id="searchsubmit"
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <input
                type="search"
                class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-yellow-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search"
                onChange={searchMovies}
              />
            </form>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={renderMovies} />
        <Route path="about" element={<About />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
export default App;

// import MovieList from "./Components/Movie-List/movie-list";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       movies: [],
//       showMovies: false,
//       searchInput: "",
//     };
//   }
//   componentDidMount() {
//     fetch(
//       "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
//     )
//       .then((response) => response.json())
//       .then((apiMovies) =>
//         this.setState(() => {
//           return { movies: apiMovies, showMovies: true };
//         })
//       );
//   }
//   searchMovies = (event) => {
//     const search = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchInput: search };
//     });
//   };
//   render() {
//     let { showMovies, searchInput, movies } = this.state;
//     const filterMovies = movies.filter((movie) => {
//       return movie.Title.toLocaleLowerCase().includes(searchInput);
//     });
//     let renderMovies = "Loading Movies...";

//     if (showMovies) {
//       renderMovies = <MovieList movies={filterMovies} />;
//     }
//     return (
//       <div className="max-w-6xl mx-auto bg-slate-200">
//         <h1 className="flex justify-center text-2xl font-semibold">
//           Welcome Stav
//         </h1>
//         <div className="flex justify-center">
//           <input
//           className="m-2 p-2 text-gray-400 rounded-md"
//             type="search"
//             placeholder="Search movies"
//             onChange={this.searchMovies}
//           />
//         </div>
//         {renderMovies}
//       </div>
//     );
//   }
// }

// export default App;
