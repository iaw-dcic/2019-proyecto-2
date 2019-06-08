import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css';
import '../../../public/css/images.css'
import ImageButton from './ImageButton';

export default class Images extends Component {
    constructor(){
        super()

        this.state={images:[]}
    }
    
   /* buttonClick(id){
        this.props.onClick(id)
    }*/

    componentWillMount(){
        this.loadImages();
    }

    loadImages(){
        fetch('/api/images').then(
            (response)=>{
                return response.json();
            }   )
        .then(images => {
            this.setState({ images: images });
        });
    }

    render() {
        return (
            <div>
                {
                this.state.images.map(image => <ImageButton image={image} onClick={() => this.props.onClick(image.id)}/>)
                }
            </div>
        );
    }
}