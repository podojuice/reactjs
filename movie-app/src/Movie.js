import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';


// class Movie extends Component {
//
//     static propTypes = {
//         title: PropTypes.string.isRequired, // 부모에게서 string으로 받아야하고, 이 정보는 꼭 와야한다고 말해주는 것. proptypes 설치해야함. $yarn add prop-types하고 import.
//         poster: PropTypes.string.isRequired, // 이걸 해주면 정보가 제대로 오는지, 내가 원하는 형식으로 오는 지 확인 가능.
//     }
//
//     render() {
//
//         return(
//
//         )
//     }
// }

function Movie({title, poster}) {
    return (
        <div>
        <MoviePoster poster={poster}/>
        <h1>{title}</h1>
        </div>
    )
}
Movie.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

// class MoviePoster extends Component{
//
//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }
//     render() {
//         return(
//             <img src={this.props.poster} />
//         )
//     }
// }


//위의 코드와 정확히 같은 것. 근데 아래 것은 state가 없는 dump component. 굳이 state가 필요없으면 밑에처럼
// function형태로 만드는 게 낫다. 이렇게 만들면 앞에 App.js에서 썼던 여러 함수들 쓸 필요 없다는 뜻.
// functional 컴포넌트는 state가 없다. 핵심.
function MoviePoster({poster}){
    return (
        <img src={poster}  alt = "Movie Poster" />
    )
}

// 그럼 functional 컴포넌트로 만들엇으면 propType은 어케 확인? 아래 처럼.
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie