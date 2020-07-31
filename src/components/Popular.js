import React from 'react';
import Cards from './movie/Cards'


class Popular extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            movies: [],
        }
    }

    render(){
        return(
            <div>Popular
                <Cards/>
            </div>
        );
    }
}

export default Popular;