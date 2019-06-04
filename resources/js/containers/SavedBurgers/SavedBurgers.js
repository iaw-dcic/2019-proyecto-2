import React, { Component } from 'react';
import { Button ,Container } from "react-bootstrap";


import SavedBurger from '../../components/Burger/SavedBurger/SavedBurger';
import axios from '../../components/axios-burgers';
import localStorage from 'local-storage'
import Burger from "../../components/Burger/Burger";




class SavedBurgers extends Component {

    state = {
        isLoading : true,
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

                let fetchedData = res.data;
            
                this.setState({burgers: fetchedData});
                this.setState({isLoading: false});

                console.log("Fetched burgers: ",fetchedData);
               
            })
            .catch(err => {
                console.log("ERROR obteniendo las hamburguesas")
            });
        

        let burgerIngredients= [];
            
        
    }

    render () {
        return (
            <div>
                {
                    this.state.isLoading ?
                        <div>
                            Cargando ...
                        </div>
                        :
                        <div>
                        {
                            this.state.burgers.map(function(item, i){
                            return (
                                <Container className="text-center" >
                                    <Button>Editar</Button>
                                    <Burger
                                    key={i}
                                    ingredients={item}/>
                                </Container>
                            )})
                        }
                        </div>
                        
                }
            
            </div>
        );
    }
}

export default SavedBurgers;