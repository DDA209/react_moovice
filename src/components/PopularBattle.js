import React from 'react';

import Cards from './movie/Cards';

import Config from '../Config';

const popUrl = `${Config.apiRoot}discover/movie?sort_by=popularity.desc&api_key=${Config.apiKey}`;
// const popUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
// const imgHttpUrl = "https://image.tmdb.org/t/p/w300/";


class PopularBattle extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            movies: [], // liste des films
            currentPage: 1,
        }

        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount(){

        fetch(popUrl) // request
        .then( (res) => {return res.json() // réponse binaire transformée en type json (= type promesse)
        }) //chaînage
        .then( (json) => { // ce .then attend toujours une fonction avec json en paramètre
        //   console.log('components/popular#componentDidMount json.results', json.results);
          this.setState({
              movies: json.results
            })
          console.log('components/popular#componentDidMount this.state.movies)', this.state.movies);
        //   console.log('components/popular#componentDidMount json', json);
        });
    }
    


    render(){
        // console.log('components/popular#render popUrl', popUrl);
        console.log('components/popular#render this.state.movies', this.state.movies)
        // destructuration de this.state.movies en movies[*] :
        const { movies } = this.state;
        const movieLeft = movies[this.state.currentPage * 2 - 2];//
        const movieRight = movies[this.state.currentPage * 2 - 1];//
        
        console.log('movieLeft',movieLeft);
        console.log('movieRight',movieRight);
        // console.log('movieLeft.title',movieLeft.title);
        // console.log('movieRight.title',movieRight.title);
        
        return(
            <div className="row">

                <div className="col-6 col-md4" >
                    <Cards
                        // title={movieLeft.title}
                        // picture={Config.imgHttpUrl + movieLeft.poster_path}
                    >
                    </Cards>
                </div>
                <div className="col-6 col-md4" >
                    <Cards
                        // title={movieRight.title}
                        // picture={Config.imgHttpUrl + movieRight.poster_path}
                    >
                    </Cards>
                </div>

            </div>
        );
    }
}

export default PopularBattle;