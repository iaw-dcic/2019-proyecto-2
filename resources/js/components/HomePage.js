import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import  "./css/hp.css";
import Navigation from './Navigation'
import {Carousel,CarouselItem,CarouselCaption} from 'react-bootstrap'
import {Navbar, NavLink, Nav} from 'react-bootstrap';

export default class HomePage extends Component {

  render() {
    return(
    <div>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">SpoCtor</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/login">Iniciar sesión</Nav.Link>
          <Nav.Link href="/register">Registrarse</Nav.Link>
        </Nav>
      </Navbar>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.cnn.com/cnnnext/dam/assets/181030215412-pba-manu-ginobili-spurs.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Líder en DCIC</h3>
              <p>Prediciendo el futuro desde 1995</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://getwallpapers.com/wallpaper/full/f/c/8/27151.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Más que un prode</h3>
              <p>Una forma de conectarte con el deporte</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://clickwallpapers.com/1080p/sports-basketball-wallpaper-hd-resolution-On-Wallpaper-1080p-HD.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Acercandote al mundo</h3>
              <p>Para compartir y competir con tus amigos</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  </div>
);
}
}
