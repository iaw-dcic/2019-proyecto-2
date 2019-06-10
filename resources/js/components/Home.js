




import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import AvatarForm from './avatarForm';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatars: [], // [{'id', 'features:{'feature1':'option', 'feature2':'option', ... }}, {...}, ...]
      isAvatarUpdate: false, // para saber si se trata de una actualizacion de un avatar. Sino es uno nuevo.
    };
  }

  componentDidMount() {
    axios.get('/user/avatars')
      .then(res => {
        const avatars = res.data;
        console.log(avatars);
        this.setState({ avatars });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  armarImgUrl(features) {
    console.log(features);
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
    console.log("Url: ", url);
    return url;
  }

  editAvatar(avatarId, avatarOptions){

  }

  render() {
    const avatars = this.state.avatars;
    const avatarImgs = [];
    avatars.forEach((element) => {
      avatarImgs.push(
        (
          <div className="col-md-3" key={element.id}
            onClick={() => editAvatar(element.id, element.features)}
          >
            <img
              src={this.armarImgUrl(element.features)}
              className="mx-auto d-block w-75"
            />
          </div>
        )
      );
    });



    return (
      <div>
        <AvatarForm />
        <h2 className="">Mis avatares</h2>
        <div className="row">
          {avatarImgs}
        </div>

      </div>
    )
  }
}

