import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'

export default class ShirtMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            shirts: this.props.shirts
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ shirts: nextProps.shirts })
    }

    render() {
        return (
            <React.Fragment>
                <Menu disableAutoFocus isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                    <div className="d-flex justify-content-between">
                        <h3 className="bm-item">
                            <span>Your Designs</span>
                        </h3>
                        <div>
                            <Button variant="success" onClick={this.handleCreateShirt}>+</Button>
                        </div>
                    </div>
                    {this.state.shirts.map(shirt =>
                        <a href="#" key={shirt.id} id={shirt.id} className="bm-item" onClick={this.handleSelectedShirt(shirt)}>{shirt.design_name}</a>)}
                </Menu>
            </React.Fragment>
        );
    }

    handleSelectedShirt = shirt => event => {
        this.closeMenu();
        this.props.onSelectShirt(shirt);
    }

    handleCreateShirt = () => {
        this.closeMenu();
        this.props.onCreateShirt();
    }
}


