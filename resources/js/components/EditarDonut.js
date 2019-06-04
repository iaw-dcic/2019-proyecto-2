import React from 'react';
import ReactDOM from 'react-dom';

class EditarDonut extends React.Component{
    constructor(props){
        super(props)
    }
   
    handleClick = (e) => {
        console.log(e.currentTarget.value);
        console.log();
        this.props.onClick(e.currentTarget.value2, e.currentTarget.value);
    };    

    render() {
        return (            
                <button
	                type="button"
	                className="btn"
                    value={this.props.donut.url}
                    value2={this.props.donut.id}
                    onClick={this.handleClick}
                >
	            <img className="donasbotones" src={this.props.donut.url} />
                </button>            
        );
    }
}

export default EditarDonut;
