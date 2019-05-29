import React, { Component } from 'react';

export default class Pronostico extends Component {
    state = {
        items: [],

    }
    componentWillMount() {
        fetch('http://localhost/pr2/api/cantidadpronosticos')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.items,
                })
            });

    }

    async  handlePronosticos(e) {
        var selectBox = document.getElementById("selectBox");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        this.props.setPronostico(selectedValue);
    }




    render() {

        var { items } = this.state;
        return <div >
            <div className="row">
                <div className="form-group">
                    <div className="row">
                        <h5>Bienvenido Usuario</h5>
                    </div>
                    <label >Selecciona el pronóstico a ver:</label>
                    <select className="form-control" id="selectBox" onChange={(e) => this.handlePronosticos(e)}>
                        <option> </option>
                        {items.map((item, i) => (
                            <option key={i}>
                                {item.pronostico}
                            </option>
                        ))}

                    </select>
                </div>
            </div >

        </div >
    }
}