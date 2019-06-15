import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

    state = {
    }

    //render: componentWillMount() => render() => componentDidMount()

    //update componentWillReceiveProps() => shouldcomponentUpdate() => true => componentWillUpdate() => render() => componentDidUpdate()

    componentWillMount() {
        // 이게 1번으로 실행되고,
    }


    componentDidMount() {
        // 이게 3번으로 실행 됨.
        this._getMovies();
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            console.log(movie);
            return <Movie 
            title = {movie.title_english} 
            poster = {movie.medium_cover_image} 
            key = {movie.id} 
            genres={movie.genres} 
            synopsis = {movie.synopsis}
            />
        })
        return movies
    }

     _getMovies = async () => {
        const movies  = await this._callApi();
        this.setState({
            movies: movies
        })
    }

    _callApi = () => {
        return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
        .then(res => res.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
    }

    render() {
        // 얘가 2번으로 실행된다.
        const {movies} = this.state;
        return (
            <div className ={movies ? "App": "App-loading"}>
                {this.state.movies ? this._renderMovies() : 'Loading'}
            </div>
    );
    }
}

export default App;
