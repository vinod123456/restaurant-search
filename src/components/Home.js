import React from 'react';
import Restaurants from './Restaurants';
import ZomatoApi from './ZomatoApi';

export default class Home extends React.Component{

    constructor(){
        super();
        this.onUserInput=this.onUserInput.bind(this);
        this.onInputSubmit=this.onInputSubmit.bind(this);
        // this.userInputs={
        //     city:'',
        //     entityId:'null',
        //     cuisines:'null'
        // };
        this.state={
            userInputs:{
                entityId:'null',
                cuisines:'null'
            },
            restaurants:[],
            isLoading:false,
            buttonDisable:true
        }
    }

    onUserInput(event){
        event.preventDefault();
        if(event.target.name==="entityId"){
            ZomatoApi.getEntityId(event.target.value,
                id=>this.setState(prevState=>({
                    userInputs:{
                        ...prevState.userInputs,
                        entityId:id
                    },
                    buttonDisable:false
                })),           
                );
        }else{
            let inputValue=event.target.value;
            this.setState(prevState=>({
                userInputs:{
                    ...prevState.userInputs,
                    cuisines:inputValue
                },
                buttonDisable:false
            }))
        } 
        // if(event.target.name==="entityId"){
        //     this.userInputs.city=event.target.value;
        //     console.log(this.userInputs);
        // } else{
        //     this.userInputs.cuisines=event.target.value;
        //     console.log(this.userInputs);
        // }
        
        
    }

    async onInputSubmit(event){
        event.preventDefault();

        this.setState({restaurants:[],isLoading:!this.state.isLoading});

        //  ZomatoApi.getEntityId(this.userInputs.entityId,
        //             id=> this.userInputs.entityId=id          
        //             );
        ZomatoApi.getRestaurants(this.state.userInputs,
            data=>this.setState({restaurants:data,isLoading:!this.state.isLoading,buttonDisable:true})
            )
    }

    restaurants=()=>{
        return this.state.restaurants.map(restaurant=>
           <Restaurants key={restaurant.restaurant.id} restaurantData={restaurant.restaurant}/>
        
        )
    }

    render(){
  
        return(
            <React.Fragment>
                <div className='text-center'>
                     <span className='font-weight-bold'>Find restaurents in your city</span>
                </div>
                <form className='form-inline justify-content-center' >
                    
                    <input type='text' name='entityId' placeholder='Enter City' className='form-control  mr-sm-2' onBlur={this.onUserInput}/>
                    <input type='text' name='cuisines' placeholder='Indian, chinese, Thai' className='form-control  mr-sm-2' onBlur={this.onUserInput}/>
                    <button type='submit' className='btn btn-primary' disabled={this.state.buttonDisable} onClick={this.onInputSubmit} >Search</button>
                </form>

                {this.state.isLoading===true && 
                    <div className='d-flex justify-content-center'>
                        <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    </div>
                }

                {this.state.isLoading===false && <this.restaurants/>}
            </React.Fragment>
        )
    }
}