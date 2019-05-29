import React from 'react';

class EditarDonuts extends React.Component {

  handleChange (e) {
    console.log(e.currentTarget.value);
    const donut = { ...this.props.donut };
    donut[e.currentTarget.name] = e.currentTarget.value;
    this.props.actualizarDonuts(this.props.clave, donut);
  };

  render() {
    return (
      <form className='border p-2 m-2'>
        <div className='form-row'>
          
          <div className='form-group col'>
            <select
              value={this.props.donut.sabor}
              onChange={this.handleChange}
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
      </form>
    );
  }
}

export default EditarDonuts;



