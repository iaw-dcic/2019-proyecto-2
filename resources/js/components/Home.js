




import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import AvatarForm from './avatarForm';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [], // [{'feature': '', options: ['','',...]}, {...}, ...]
      avatars: [], // [{'id', 'features:{'feature1':'option', 'feature2':'option', ... }}, {...}, ...]
      current_avatar: {
        'id': null,
        'options': {}
      },
      isAvatarUpdate: false, // para saber si se trata de una actualizacion de un avatar. Sino es uno nuevo.
      alert_message_type: '',
      alert_message: ''
    };
  }

  componentDidMount() {
    axios.get('/avatar/caracteristicas-con-opciones')
      .then(res => {
        const features = res.data;
        const current_avatar = this.defaultAvatar(features);
        this.setState({ features, current_avatar });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get('/user/avatars')
      .then(res => {
        const avatars = res.data;
        // console.log(avatars);
        this.setState({ avatars });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  defaultAvatar(features) {
    const defaultAvatar = {
      'id': null,
      'options': {}
    };
    // const features = this.state.features;
    features.forEach((element) => {
      defaultAvatar.options[element.feature] = element.options[0];
    });
    return defaultAvatar;
  }

  armarImgUrl(features) {
    // console.log(features);
    const imgBaseUrl = window.location.origin + "/avatar?";
    let url = imgBaseUrl;
    if (Object.values(features).length == 0) {
      url = imgBaseUrl + "wait=loading";
      return url;
    }
    let aux;
    const optionsKeys = Object.keys(features);
    for (let i = 0; i < optionsKeys.length; i++) {
      let aux = optionsKeys[i] + "=" + features[optionsKeys[i]] + "&";
      url += aux;
    }
    url = encodeURI(url);
    // console.log("Url: ", url);
    return url;
  }

  editAvatar(avatarId, avatarOptions) {
    console.log("editando...");
    const current_avatar = {
      'id': avatarId,
      'options': JSON.parse(JSON.stringify(avatarOptions))
      // 'options': avatarOptions
    }
    const isAvatarUpdate = true;
    this.setState({ current_avatar, isAvatarUpdate });
  }

  deleteAvatar(avatarId){
    axios.delete('/user/avatar/' + avatarId)
        .then(response => {
          this.getAvatars();
          this.setState({
            alert_message_type: "success",
            alert_message: "Avatar eliminado con exito."
          });
        })
        .catch(error => {
          this.setState({
            alert_message_type: "error",
            alert_message: "Ocurrio un error al eliminar el avatar."
          })
        });
  }

  handleChange(event) {
    const target = event.target;
    const option = target.value;
    const feature = target.name;
    const current_avatar = this.state.current_avatar;
    current_avatar.options[feature] = option;
    this.setState({ current_avatar })
  }

  getAvatars() {
    axios.get('/user/avatars')
      .then(res => {
        const avatars = res.data;
        this.setState({ avatars });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit", this.state.current_avatar);
    const current_avatar = this.state.current_avatar;
    if (this.state.isAvatarUpdate) {
      axios.put('/user/avatar/' + current_avatar.id, { data: current_avatar.options })
        .then(response => {
          this.getAvatars();
          this.setState({
            alert_message_type: "success",
            alert_message: "Avatar actualizado con exito."
          });
        })
        .catch(error => {
          this.setState({
            alert_message_type: "error",
            alert_message: "Ocurrio un error al actualizar el avatar."
          })
        });
    }
    else {
      axios.post('/user/avatar', { data: current_avatar.options })
        .then(response => {
          this.getAvatars();
          this.setState({
            alert_message_type: "success",
            alert_message: "Avatar creado con exito."
          });
        })
        .catch(error => {
          this.setState({
            alert_message_type: "error",
            alert_message: "Ocurrio un error al guardar el avatar."
          })
        });
    }

  }

  handleEndUpdate(event) {
    event.preventDefault();
    console.log("Finalizar edicion");

    // const current_avatar = this.defaultAvatar(this.state.features);
    const isAvatarUpdate = false;
    this.setState({ isAvatarUpdate });
  }

  render() {
    const avatars = this.state.avatars;
    const avatarImgs = [];
    avatars.forEach((element) => {
      avatarImgs.push(
        (
          <div className="col-md-3" key={element.id}>
            <img
              src={this.armarImgUrl(element.features)}
              className="mx-auto d-block w-75"
            />

            <div className="text-center mt-3">
              <button
                className="btn btn-primary mr-2"
                onClick={() => this.editAvatar(element.id, element.features)}
              >Editar
            </button>
              <button
                className="btn btn-danger"
                onClick={() => this.deleteAvatar(element.id)}
              ><i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        )
      );
    });

    // if (this.state.alert_message_type != "") {
    //   document.body.scrollTop = 0;
    //   document.documentElement.scrollTop = 0;
    // }

    return (
      <div>
        {this.state.alert_message_type == 'success' ? <SuccessAlert message={this.state.alert_message} /> : null}
        {this.state.alert_message_type == 'error' ? <ErrorAlert message={this.state.alert_message} /> : null}
        <AvatarForm
          features={this.state.features}
          current_options={this.state.current_avatar.options}
          isAvatarUpdate={this.state.isAvatarUpdate}
          onClickEndUpdate={(e) => this.handleEndUpdate(e)}
          onSubmit={(e) => this.handleSubmit(e)}
          onChange={(e) => this.handleChange(e)}
        />
        <h2 className="">Mis avatares</h2>
        <div className="row">
          {avatarImgs}
        </div>

      </div>
    )
  }
}

