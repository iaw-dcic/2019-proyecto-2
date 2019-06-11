import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css';

export default class Head extends Component {
    render() {
        return (
            <div>
                <meta name="csrf-token" content="{{ csrf_token() }}"></meta>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            </div>
        );
    }
}