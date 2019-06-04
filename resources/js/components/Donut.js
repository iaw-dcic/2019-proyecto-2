import React from 'react';

class Donut extends React.Component {

    render() {
        const { sabor } = this.props.donut;
        const { glaseado } = this.props.donut;
        const { decoracion } = this.props.donut;

        return (
                <div className="col fondo">
                    <img src={ sabor } className="donasChicas" />
                    <img src={ glaseado } className="donasChicas" />
                    <img src={ decoracion } className="donasChicas" />
                </div>  
                 );

        }
}

export default Donut;

