import React, { Component } from 'react';
import Listar from '../pages/teams/Listar';


class Home extends Component {

    render() {

        return (
            <div className="row text-center">
                <div className="col-xl">
                    <Listar />
                </div>
            </div>


        );

    }
}
export default Home;
