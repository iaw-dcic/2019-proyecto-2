import React from 'react';
import ReactDOM from 'react-dom';

class EditarDonut extends React.Component{
    constructor(props){
        super(props)
    }
   
    handleClick = (e) => {
        console.log(e.currentTarget.value);
        console.log();
        // const donut = { ...this.props.donut };
        // donut[e.currentTarget.name] = e.currentTarget.value;
        // this.props.actualizarDonuts(this.props.clave, donut);
        this.props.onClick(e.currentTarget.value2, e.currentTarget.value);
    };    


    buttonClick(id, url){
        this.props.onClick(id,url)
    }

    render() {
        return (            
                <button
	                type="button"
	                className="btn"
                    value={this.props.donut.url}
                    value2={this.props.donut.id}
                    onClick={this.handleClick}
                    // onClick={() =>this.buttonClick(this.props.donut.id,this.props.donut.url)}
                >
	            <img className="donasbotones" src={this.props.donut.url} />
                </button>            
        );
    }
}

export default EditarDonut;


// <button
// type="button"
// className="btn"
// name="glaseado"
// value={this.props.glaseado.url}
// onClick={this.handleClick}
// >
// <img className="donasbotones" src={this.props.glaseado.url} />
// </button>