import React, { Component } from 'react';

import SavedBurger from '../../components/Burger/SavedBurger/SavedBurger';
import axios from '../../components/axios-burgers';
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class SavedBurgers extends Component {

    state = {
        burgers: [],    
    }


  componentDidMount() {
        console.log("Entre a savedBurgers");
        axios.get('/burgers')
            .then(res => {
                console.log(res.data);
                /*const fetchedBurgers = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }*/
                //console.log(fetchedBurgers);
                //this.setState({burgers: fetchedBurgers});
            })
            .catch(err => {
                console.log("ERROR obteniendo las hamburguesas")
            });
    }

    render () {
        return (
            <div>
                <p> Hamburguesas de 'nombreusuario'</p>
              {/*  {this.state.burgers.map(burger => (
                    <Order 
                        key={burger.id}
                        ingredients={burger.ingredients} />                   
                ))} */}
            </div>
        );
    }
}

export default SavedBurgers;