import React from 'react';

class AgregarDonuts extends React.Component {
    
    saborRef = React.createRef();
      
    handleSubmit (e){
      e.preventDefault();
      const donut = {
        sabor: this.saborRef.current.value
      };
      this.props.agregarDonut(donut);
      e.currentTarget.reset();
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className='border p-2 m-2'>
          <div className='form-row'>
            
            <div className='form-group col'>
              <select
                ref={this.saborRef}
                name='sabor'
                type='text'
                className='form-control'
              >
               <option>Chocolate</option>
                <option>Vainilla</option>
                <option>Mixto</option>
              </select>
            </div>
          </div>
          <button type='submit' className='text-center btn btn-primary'>
            Agregar Donut
          </button>
        </form>
      );
    }
  }
  
  export default AgregarDonuts;
  