import React, { Component } from 'react'

class BodyItems extends Component {

    render(){
        return (         
            <div>   
                <h5>Body items</h5>             
                <ul>
                {this.props.items.map(item => 
                    (<li key={item.id}>
                        <img src={"/avatars/body/"+item.resource} alt={item.resource}></img>
                    </li>)
                )}
                </ul>
            </div>
        );
    }

}

export default BodyItems;