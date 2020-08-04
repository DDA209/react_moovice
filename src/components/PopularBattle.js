// import React from 'react';
// import Cards from './movie/Cards';
// import Picture from './images/placeholder.png'

// const apiKey = 'ec9a9b00d4df33fd1448a81ad129214f';
// const popUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
// const imgHttpUrl = "https://image.tmdb.org/t/p/w300/";

// class PopularBattle extends React.Component{

//     constructor(props){
//         super(props)

//         this.state = {
//             movies: [],
//             currentPage: 1,
//         }
//     }

//     componentDidMount(){

//         fetch(popUrl)
//         .then( (res) => {return res.json()
//         })
//         .then( (json) => {
//             const movies = json.results
//             this.setState({
//                 movies
//             })
//         });
//     }
    
//     render(){
//         console.log('components/popularBattle#render this.state.movies', this.state.movies)
//         return(
//             <div className="row">
   



//                 {this.state.movies.map( (movie, key) => {
                                        
//                     console.log('components/popularBattle#render/map movie.id', movie.id)
//                     let picture = imgHttpUrl + movie.poster_path;

//                     if (movie.poster_path.length === 0){
//                         picture = Picture;
//                         console.log('default picture', picture)
//                     }

//                     return (
//                         <Cards
//                             key={movies.movie.id}
//                             title={movie.title}
//                             description={movie.overview}
//                             picture={picture}

//                         >
//                         </Cards>
//                     )

//                 })
//                 }
                
//             </div>
//         );
//     }
// }

// export default PopularBattle;