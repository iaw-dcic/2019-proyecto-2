import React from 'react';

class Donut extends React.Component {

    render() {
        const { sabor } = this.props.donut;
        const { glaseado } = this.props.donut;
        const { decoracion } = this.props.donut;

        return (
                <div className="col fondo">
                    <img src={ sabor } className="chico" />
                    <img src={ glaseado } className="chico" />
                    <img src={ decoracion } className="chico" />
                </div>  
                 );

        }
}

export default Donut;

