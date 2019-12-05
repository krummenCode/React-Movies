import React, { Component } from 'react';
import './App.css'
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    //this.performSearch("happy feet")
  }

    performSearch(searchTerm) {
      const urlString = "https://api.themoviedb.org/3/search/movie?api_key=7162c15f962743f2f6511216d4ede954&language=en-US&query=" + searchTerm + "&page=1&include_adult=false";
      $.ajax({
          url: urlString,
          success: (searchResults) => {
              console.log("Fetch data succesfully")
              const results = searchResults.results

              var movieRows = []

              results.forEach((movie) => {
                movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
                const movieRow = <MovieRow key={movie.id} movie= {movie} />
                movieRows.push(movieRow)
              })
              this.setState({rows: movieRows})
          },
          error: (xhr, status, err) => {
              console.error("Failed to fetch.")
          }
      })
    }

    searchChangeHandler(event) {
      const boundObject = this
      const searchTerm = event.target.value
      boundObject.performSearch(searchTerm)
    }

    render() {
      return (
        <div>
          {/* NavBar */}
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a className="navbar-brand" href="index.html">React Movies</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Search form */}
          <form className="form-inline">
            <input className="form-control form-control-sm ml-2 mr-2 mt-2 w-100" type="text" placeholder="Search"
            onChange={this.searchChangeHandler.bind(this)} aria-label="Search" />
          </form>

          {/* Movie Rows */}
          <div className="container">
            <div className="row">
              {this.state.rows}
            </div>
          </div>

        </div>
      );
   }
}

export default App;
