import React, { Component } from "react";
import {Container} from "react-bootstrap";
import axios from "../../components/axios-burgers";
import localStorage from "local-storage";
import Burger from "../../components/Burger/Burger";

class SavedBurgers extends Component {
    state = {
        isLoading: true,
        burgers: [],
        hasResults: true
    };

    componentDidMount() {
        let token = localStorage.get("userToken");

        let axiosConfig = {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token
            }
        };

        axios
            .get("/burgers", axiosConfig)
            .then(res => {
                let fetchedData = res.data;
                if (!$.isArray(fetchedData) || !fetchedData.length) {
                    this.setState({ hasResults: false });
                }

                this.setState({ burgers: fetchedData });
                this.setState({ isLoading: false });
            })
            .catch(err => {
                console.log("ERROR obteniendo las hamburguesas");
            });
    }

    render() {
        return (
            <div>
                {!this.state.hasResults ? (
                    <div>
                        <Container><h1>No tenes hamburguesas cargadas!</h1></Container>
                    </div>
                ) : this.state.isLoading ? (
                    <div>Cargando ...</div>
                ) : (
                    <div>
                        {this.state.burgers.map(function(item, i) {
                            return (
                                <Container className="text-center" key={i}>
                                    <Burger key={i} ingredients={item} />
                                </Container>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default SavedBurgers;
