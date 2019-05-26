import React from 'react';

class EditarAvatar extends React.Component {

  handleChange(e) {
    console.log(e.currentTarget.value);
    const avatar = { ...this.prop.avatar };
    avatar = e.currentTarget.value;
    this.actualizarAvatar(avatar);
  };

  render() {
    return (
      <form className='border p-2 m-2'>
            <div class="row form-group"><label for="topType" class="col-sm-3 control-label">💈 Pelo</label>
            <div class="col-sm-9">
                <select 
                    class="form-control"
                    value={value}
                    onChange={this.handleChange}
                    type='text'
                >
                        <option value="NoHair">Sin pelo</option>
                        <option value="Hat">Gorro</option>
                        <option value="LongHairNotTooLong">Pelo corto lacio</option>
                        <option value="LongHairMiaWallace">Pelo corto con flequillo</option>
                </select>
            </div>
        </div>
      </form>
    );
  }
}

export default EditarAvatar;

