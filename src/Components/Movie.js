import React from 'react'

const movies = [
    { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg" },
    { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante" },
    { id: "z2uykusRE", title: "Titanic", director: "James Cameron" }
  ];
  

function Movie(props) {
    return (
      <div className="card-content">
        <ul>{movies.map((movie) => <li key={movie.id}>{movie.title} - {movie.director}</li>)}</ul>
      </div>
    );
  }


  export default Movie;