import React, {Component} from 'react';
import Listar from '../pages/teams/Listar';

class Home extends Component {

    url = "/api/index";

    render(){
        return (
            <div>
                <Listar/>
            </div>
        );
    }
}

export default Home;
