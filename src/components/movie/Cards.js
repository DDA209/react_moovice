import React from 'react';

class Cards extends React.Component{
    render(){
        return(
            <div className="card">
                <img src="moviePicture" class="card-img-top" alt="Affiche du film movieDescrition"/>
                <h5 class="card-title">movieTitle</h5>
                <p class="card-text">movieDescription</p>
                {/* <a href="#" class="btn btn-primary">Nop</a> */}
            </div>
        );
    }
}

export default Cards;