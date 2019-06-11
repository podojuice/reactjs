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
        setTimeout(() => {
            this.setState({
                movies: [

                    {
                        title: "Matrix",
                        poster: "https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea",
                    },
                    {
                        title: "Full Metal Jacket",
                        poster: "https://img1.daumcdn.net/thumb/R338x491/?fname=http://t1.daumcdn.net/cfile/205CF91249EC79F00F",
                    },
                    {
                        title: "Oldboy",
                        poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg",
                    },
                    {
                        title: "Star Wars",
                        poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg",
                    },


                    {
                        title: "Trainspotting",
                        poster: "https://images-na.ssl-images-amazon.com/images/I/51GolvcFJTL.jpg"
                    }
                ]


            })
        }, 1000)
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
