import React, { Component } from 'react'

class ExtraItems extends Component {

    render() {
        return (
            <div>   
                <h5>Extra items</h5>             
                <ul>
                {this.props.items.map(item => 
                    (<li key={item.id}>{item.resource}</li>)
                )}
                </ul>
            </div>
        );
      }

}

export default ExtraItems;