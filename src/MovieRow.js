import React from 'react';

class MovieRow extends React.Component {
  render() {
    return (
      <div key={this.props.movie.id} className="card mx-auto col-sm-9 mt-3">
        <img className="card-img-top pt-3" src={this.props.movie.poster_src} alt="Poster" width="500px" />
        <div className="card-body">
          <h4 className="card-title">{this.props.movie.title}</h4>
          <p className="card-text">{this.props.movie.overview}</p>
          <a href="#index.html" className="btn btn-primary">See Profile</a>
        </div>
      </div>
    );
  }
}

export default MovieRow
