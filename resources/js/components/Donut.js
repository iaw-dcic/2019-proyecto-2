import React from 'react';

class Donut extends React.Component {

    render() {
        const { sabor } = this.props.donut;
        return (
            <div className='card mb-2'>
                <p className='card-text'>{sabor}</p>     
            </div>
        );
        }
}

export default Donut;
