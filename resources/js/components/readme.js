import React, { Component } from 'react'
import LandingImage from './img/landing-page.jpg'
import { Heading, Text } from 'rebass'
import { Hero } from 'react-landing-page'
import ReactDOM from 'react-dom'

export default class Readme extends Component {

    render() {
        return (
            <React.Fragment>
                <Hero
                    color="black"
                    bg="white"
                    backgroundImage={LandingImage}
                >
                    <Heading fontSize={[64]}>ShirtDesigner</Heading>
                    <Text fontSize={[20]}>This website was made by Sebastián Salaberría for academic purposes.</Text>
                </Hero>
            </React.Fragment>
        );
    }

}
