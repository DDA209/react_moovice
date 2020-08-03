import React from 'react';

class Cards extends React.Component{
    render(){
        console.log('components/movie/cards#render this.props.key',this.props.key)
        return(
        <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={this.props.key}>
                <div className="card" style={{padding: "1rem", margin: "0.5rem -0.5rem", height: "auto"}}>
                    <img src={this.props.picture} className="card-img-top" alt={"Affiche du film " + this.props.title}/>
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">
                        {this.props.description}
                    </p>
                    {/* <a href="#" class="btn btn-primary">Nop</a> */}
                </div>
            </div>
        );
    }
}

export default Cards;