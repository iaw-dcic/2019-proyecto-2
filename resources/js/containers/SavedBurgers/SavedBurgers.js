import React, { Component } from 'react';

import SavedBurger from '../../components/Burger/SavedBurger/SavedBurger';
import axios from '../../components/axios-burgers';
import breadImage from '../../../assets/images/prueba1.png';
import localStorage from 'local-storage'
import Burger from "../../components/Burger/Burger";




class SavedBurgers extends Component {

    state = {
        burgers: [],    
    }

  componentDidMount() {

        let token= localStorage.get('userToken');
        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        };

        axios.get('/burgers',axiosConfig)
            .then(res => {
                const fetchedBurgers = [];
                for (let key in res.data) {
                    fetchedBurgers.push({
                        ingredients: res.data[key],
                        id: key
                    });
                };
                /*const data = res.data;
                console.log(data);
                data.map(burger => {
                    fetchedBurgers.push({burger})
                });*/

                this.setState({burgers: fetchedBurgers});
                console.log("Fetched burgers: ",fetchedBurgers);



                const array=[];
                Object.values(fetchedBurgers).map(
                    ingredientType => {
                        //array.push(ingredientType.type);
                        array[ingredientType.type]=1;
                    }
                );
             //   console.log("Array de ingredientes que vienen del back: ",array);


              
                
               
            })
            .catch(err => {
                console.log("ERROR obteniendo las hamburguesas")
            });
        

        let burgerIngredients= [];
            
        
    }

    render () {
        return (
            <div>
                {this.state.burgers.map(burger => (
                    <SavedBurger 
                        key={burger.id} 
                        ingredients={burger}/>
                    /*<Burger
                        key={burger.id}
                        ingredients={burger.ingredients}/> */
                        
                 
                ))} 
                {/*<div className="IngredientImage">
                    <img src={breadImage} alt="Ingrediente" />
                </div>*/}
            </div>
        );
    }
}

export default SavedBurgers;