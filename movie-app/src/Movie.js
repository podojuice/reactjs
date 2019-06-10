import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';


class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired, // 부모에게서 string으로 받아야하고, 이 정보는 꼭 와야한다고 말해주는 것. proptypes 설치해야함. $yarn add prop-types하고 import.
        poster: PropTypes.string.isRequired, // 이걸 해주면 정보가 제대로 오는지, 내가 원하는 형식으로 오는 지 확인 가능.
    }

    render() {
        
        return(
        <div>
            <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
        </div>
        )
    }
}

class MoviePoster extends Component{
    render() {
        return(
            <img src={this.props.poster} />
        )
    }
}

export default Movie