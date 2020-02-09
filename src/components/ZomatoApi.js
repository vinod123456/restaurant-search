import axios from 'axios';

const apiKey='7ff8d1535bd586e18e9698d9fdca0037';

export default class ZomatoApi{

    //get entity id with city input

    static getEntityId(city,callback){
        axios.get('https://developers.zomato.com/api/v2.1/locations',{
            params:{
                query:city,
                apikey:apiKey
            }
        })
        .then(
            (response)=>callback(response.data.location_suggestions[0].entity_id)
            // (response)=>console.log(response.data.location_suggestions)
        )
        .catch(
            (error)=>console.log(error)
        )
        
    }

    // static getEntityId(city,callback){
    //     let entityId='';
    //     axios.get('https://developers.zomato.com/api/v2.1/locations',{
    //         params:{
    //             query:city,
    //             apikey:apiKey
    //         }
    //     })
    //     .then(
    //         (response)=>callback(response.data.location_suggestions[0].entity_id)
    //         // (response)=>console.log(response.data.location_suggestions)
    //     )
    //     .catch(
    //         (error)=>console.log(error)
    //     )
    //     console.log(entityId);
    // }

       //get Restaurants
    
    static  getRestaurants(userInput,callback){
        // console.log(userInput);
        // await this.getEntityId(userInput.city,(id)=>userInput.entityId=id)
        // console.log(userInput);



        // let entityId='6';
        // axios.get('https://developers.zomato.com/api/v2.1/locations',{
        //     params:{
        //         query:userInput.city,
        //         apikey:apiKey
        //     }
        // })
        // .then(
        //     (response)=>{entityId=response.data.location_suggestions[0].entity_id;          //modified
        //                 console.log(userInput.entityId)}
        // ).then(
        axios.get('https://developers.zomato.com/api/v2.1/search',{
                params:{
                    entity_id:userInput.entityId,                                           //modified
                    entity_type:'city',
                    cuisines:userInput.cuisines,
                    count:20,
                    apikey:apiKey
                }
            })
            .then(
                (response)=>callback(response.data.restaurants)
                // response=>console.log(response.data.restaurants[0].restaurant)
            )
            .catch(
                error=>console.log(error)
            )
        // )
    }
}
