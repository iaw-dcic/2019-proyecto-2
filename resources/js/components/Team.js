import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [],
        };
    }

componentDidMount(){
    var vm = this
    axios.get('/api/team/'+this.props.id)
	.then(function (response) {
		vm.setState({
           team: response.data
          });
          console.log(response.data)

	}).catch(function (error){
		console.log(error.response)
	})
}

render(){
    return (
        <div class="col-6">
            {this.state.team.name}
        </div>
            
    );
}


}
