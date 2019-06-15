import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';


function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>

            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine="4"
                        ellipsis=' ...'
                        trimRight
                        basedOn = 'letters'
                    
                    />
            
                </p>
            </div>
        </div>
    )
}
Movie.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
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
function MoviePoster({poster, alt}){
    return (
        <img src={poster}  alt ={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
}

// 그럼 functional 컴포넌트로 만들엇으면 propType은 어케 확인? 아래 처럼.
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Movie