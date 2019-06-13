import React, { Component } from 'react';

class Navbar extends Component {


    onSubmit = (e) => {
        e.preventDefault();
        //console.log("submit");
        axios.post('/logout').then(res => {
            console.log(res.data);
            window.location.reload();
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="#">Prode</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {
                            //<!-- Left Side Of Navbar -->
                        }
                        <ul className="navbar-nav mr-auto">

                        </ul>

                        {
                            //Right Side Of Navbar 
                        }
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">Victor<span className="caret"></span></a>

                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    {
                                        //<a className="dropdown-item" href="{{ route('logout') }}"onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>
                                    }

                                    <form id="logout-form" onSubmit={this.onSubmit} >
                                        {
                                        //<button classNameName="dropdown-item" onClick={this.logout}>Logout</button>
                                        }
                                        <input type="submit" value="Logout" />

                                    </form>


                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Navbar;