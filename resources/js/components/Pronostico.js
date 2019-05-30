import React, { Component } from 'react';

export default class Pronostico extends Component {
    state = {
        items: [],

    }
    componentDidMount() {
        fetch('http://localhost/pr2/api/cantidadpronosticos')
            .then(res => res.json())
            .then(json => {
                if (json != null)
                    this.setState({
                        items: json.items,
                    })
            });

    }
    componentWillReceiveProps() {
        fetch('http://localhost/pr2/api/cantidadpronosticos')
            .then(res => res.json())
            .then(json => {
                if (json != null)
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
        var i = "";
        var { items } = this.state;
        if (items != null) {
            {
                i = items.map((item, i) => (
                    <option key={i}>
                        {item.pronostico}
                    </option>
                ))
            }
        }

        return <div>
            <div className="row">
                <div className="form-group">
                    <div className="row">
                        <h5>Bienvenido Usuario</h5>
                    </div>
                    <label >Selecciona el pronóstico a ver:</label>
                    <select className="form-control" id="selectBox" onChange={(e) => this.handlePronosticos(e)}>
                        <option> </option>
                        {i}

                    </select>
                </div>
            </div >

        </div >
    }
}