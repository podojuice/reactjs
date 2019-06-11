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
        fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
        .then(res => console.log(res.json()))
        .catch(err => console.log(err))
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title = {movie.title} poster = {movie.poster} key = {index} />
        })
        return movies
    }

    render() {
        // 얘가 2번으로 실행된다.
        return (
            <div className = "App" >
                {this.state.movies ? this._renderMovies() : 'Loading'}
            </div>
    );
    }
}

export default App;
