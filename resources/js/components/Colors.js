import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/colors.css'
import '../../../public/css/layout.css'
import ColorButton from './ColorButton';


export default class Colors extends Component {
    constructor(){
        super()

        this.state={colors:[]}
    }

    componentWillMount(){
        this.loadColors();
    }

    loadColors(){
        fetch('/api/colors').then(
            (response)=>{
                return response.json();
            }   )
        .then(colors => {
            this.setState({ colors: colors });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.colors.map(color => <ColorButton key={color.id} color={color} onClick={() => this.props.onClick(color.id)}/>)
                }
            </div>
        );
    }
}