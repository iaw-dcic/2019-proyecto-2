import React, { Component } from 'react'

export default class Pagenotfound extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">PAGE NOT FOUND</h1>
                            <hr className="divider my-4"></hr>
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="/">RETURN</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
