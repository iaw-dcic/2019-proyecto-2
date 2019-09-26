import React, { Component } from 'react';

export default class PreloadComponent extends Component{
    render(){
        return (
            <div id="preloader"></div>
        );
    }

    componentDidMount(){
        $(window).on('load', function () {
            if ($('#preloader').length) {
                $('#preloader').delay(100).fadeOut('slow', function () {
                    $(this).remove();
                });
            }
        });
    }
}
