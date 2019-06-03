import React from 'react';
import ReactDOM from 'react-dom';

class BotonGlaseado extends React.Component{
    constructor(props){
        super(props)
    }
   
    handleClick = (e) => {
        console.log(e.currentTarget.value);
        console.log();
        const donut = { ...this.props.donut };
        donut[e.currentTarget.name] = e.currentTarget.value;
        this.props.actualizarDonuts(this.props.clave, donut);
    };    

    render() {
        return (            
                <button
	                type="button"
	                className="btn"
	                name="glaseado"
	                value={this.props.glaseado.url}
	                onClick={this.handleClick}
                >
	            <img className="donasbotones" src={this.props.glaseado.url} />
	            
                </button>
    
            
        );
    }
}

export default BotonGlaseado;

