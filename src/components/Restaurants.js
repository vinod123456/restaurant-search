import React from 'react';

export default class Restaurants extends React.Component{

   

    render(){
        console.log(this.props.restaurantData.name);
        return(
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img className="image" src={this.props.restaurantData.thumb} alt="Restaurent Icon" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <span className="font-weight-bold ">{this.props.restaurantData.name}</span>
                                    <span className="rating label-info float-right ">{this.props.restaurantData.user_rating.aggregate_rating}</span>
                                </div>
                                <div className="row">
                                    <span className="font-weight-lighter small col-2">Address</span>
                                    <span className="small col-10">: {this.props.restaurantData.location.address}</span>
                                </div>
                                <div className="row">
                                        <span className="font-weight-lighter small col-2">Cuisines </span>
                                        <span className="small col-10">: {this.props.restaurantData.cuisines}</span>
                                    </div>

                            </div>
                            

                        </div>
                    </div>
         
                </div>
            </React.Fragment>
        )
    }
}
