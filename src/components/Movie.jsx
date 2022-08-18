import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Movie extends Component {
  render() {
    const { movieName, releaseYear, image } = this.props.filme;
    return (
      <div className='container m-4 mx-auto'>
        <div className='container row justify-content-center'>
            <div className='row col-6 justify-content-center'>
                <p className='col-12 text-center'>{movieName}</p>
                <p className='col-12 text-center'>{releaseYear}</p>
            </div>
            <img className='col-2' src={image} alt={movieName} />
        </div>
        </div>
    )
  }
}

Movie.propTypes = {
    filme: PropTypes.shape({
    movieName: PropTypes.string,
    releaseYear: PropTypes.number,
    image: PropTypes.string,
}).isRequired
}
