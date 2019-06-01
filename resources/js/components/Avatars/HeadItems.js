import React, { Component } from 'react'

class HeadItems extends Component {

    render(){
        return (
            <div>   
                <h5>Head items</h5>             
                <ul>
                {this.props.items.map(item => 
                    (<li key={item.id}>{item.resource}</li>)
                )}
                </ul>
            </div>
        );
    }

}

export default HeadItems;