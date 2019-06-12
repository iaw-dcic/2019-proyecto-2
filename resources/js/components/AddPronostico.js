import axios from 'axios'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class AddPronostico extends Component{

      constructor (props) {
         super(props)
         this.state = {
           name:'',
              errors: []
         }
         this.handleFieldChange = this.handleFieldChange.bind(this)
         this.handleCreateNewProject = this.handleCreateNewProject.bind(this)
         this.hasErrorFor = this.hasErrorFor.bind(this)
         this.renderErrorFor = this.renderErrorFor.bind(this)
       }


       handleFieldChange (event) {
              this.setState({
               name: event.target.value
              })
            }

       handleCreateNewProject (event) {
         event.preventDefault()

        window.axios = require('axios');
     		let api_token = document.querySelector('meta[name="api-token"]');
     		if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

         const { history } = this.props
         const prediction = {
           name: this.state.name,
         }

       axios.post('/api/predictions', prediction)
         .then(response => {
           // redirect to the homepage
           history.push('/pronostico')

           console.log(response)

         })
         .catch(error => {
                     this.setState({
                       errors: error.response.data.errors
                     })
                   })

      //  this.componentWillMount();
        }
/*
        componentWillMount () {
            window.axios = require('axios');
            let api_token = document.querySelector('meta[name="api-token"]');

            if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

            axios.get('/api/predictions')
                .then((response) => {
                  this.setState({
                    predictions: response.data
                  });
                console.log(response.data)
        });
      }
*/
               hasErrorFor (field) {
                 return !!this.state.errors[field];
               }

               renderErrorFor (field) {
                 if (this.hasErrorFor(field)) {
                   return (
                     <span className='invalid-feedback'>
                       <strong>{this.state.errors[field][0]}</strong>
                     </span>
                   )
                 }
               }



  render(){

  return(
    <div>



    <div className='container py-4'>
         <div className='row justify-content-center'>
           <div className='col-md-6'>
             <div className='card'>
               <div className='card-header'>Nuevo pronóstico</div>
               <div className='card-body'>
                 <form onSubmit={this.handleCreateNewProject}>
                   <div className='form-group'>
                     <label htmlFor='name'>Nombre identificador de tu pronóstico </label>
                     <input
                       id='name'
                       type='text'
                       name='name'
                       value={this.state.name}
                       onChange={this.handleFieldChange}
                     />
                   </div>
                   {this.renderErrorFor('name')}

    	    <button className='btn btn-primary'>Crear</button>

    			</form>
          </div>
          </div>
          </div>  </div>
            </div>
            </div>

  )}

}
