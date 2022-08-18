import React, { Component } from 'react'
import Movie from './Movie';
import MovieTitle from './MovieTitle';
import PropTypes  from 'prop-types';

export default class Catalogo extends Component {
  render() {
    const { dados } = this.props;
    return (
        <><MovieTitle />
        {dados.map((element) => <Movie filme ={element} key={element.movieName}/>)}</>
    )
  }
}

Catalogo.propTypes= {
  dados: PropTypes.arrayOf(
    PropTypes.shape({})
  )
}

Catalogo.defaultProps = {
  dados: [],
};