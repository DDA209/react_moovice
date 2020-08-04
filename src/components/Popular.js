import React from 'react';

import Cards from './movie/Cards';
// import Picture from './images/placeholder.png';
import Config from '../Config';

const apiKey = 'ec9a9b00d4df33fd1448a81ad129214f';
const popUrl = `${Config.apiRoot}discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
// const popUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
// const imgHttpUrl = "https://image.tmdb.org/t/p/w300/";


class Popular extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            movies: [], // liste des films
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

        return(
            <div className="row">

                {this.state.movies.map( (movie, key) => {
                    console.log('components/popular#render/map movie.id', movie.id)
                    let picture = Config.imgHttpUrl + movie.poster_path;

                    if (movie.poster_path.length === 0){
                        picture = Config.Picture;
                        console.log('default picture', picture)
                    }

                    return (
                        <Cards
                            key={movie.id}
                            title={movie.title}
                            description={movie.overview}
                            picture={picture}

                        >
                        </Cards>
                    )

                })
                }
                
            </div>
        );
    }
}

export default Popular;