import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <hr/>
                                <h2 className="text-uppercase text-white font-weight-bold">DEVELOPER:</h2>
                            <hr/>
                                <h5 className="text-white">Carlos Campos</h5>
                            <hr/>
                                <h2 className="text-uppercase text-white font-weight-bold">FONTS:</h2>
                            <hr/>
                                <h5 className="text-white">Boostrap 4</h5>
                                <h5 className="text-white">api laravel</h5>
                                <h5 className="text-white">Scrolling Menu from react</h5>
                                <h5 className="text-white">React</h5>
                            <hr/>
                                <h2 className="text-uppercase text-white font-weight-bold">DOCS:</h2>
                            <hr/>
                                <h5 className="text-white">react: https://reactjs.org/</h5>
                                <h5 className="text-white">curso react: https://edutin.com/library</h5>
                                <h5 className="text-white">examples react: https://www.youtube.com/watch?v=iHqa6ojKnHI&list=PLL0TiOXBeDai6x37_wQwWX6_qNZUM4FBm</h5>
                            <hr/>
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <br/>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="/profile">GET STARTED</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}