import React, { Component } from 'react';
import Listar from '../pages/teams/Listar';
// import '../components/table/tabla.css';
import HorizontalScroll from 'react-scroll-horizontal'
import GuardarProde from '../pages/prode/GuardarProde';


class Home extends Component {


    render() {
        return (
            <div className="row text-center">

                <div className="col-xl">
                    <Listar />

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>


            </div>


        );

    }
}
export default Home;
