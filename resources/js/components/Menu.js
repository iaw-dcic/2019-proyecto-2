import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';

import Body from './Body'

import './../css/Menu.css';

const MenuItem = ({avatar, selected, handleClick}) => {
    return(
        <div id="card-preview" className="card">
            <div className="card-header">
                <label>{avatar.name}</label>
            </div>
            <div id="card-body" className="card-body">
                <div className={`menu-item ${selected ? 'active' : ''}`}>
                    <Body 
                        body={avatar.body}
                        eyes={avatar.eyes}
                        mouth={avatar.hair}
                        hair={avatar.mouth}
                        nose={avatar.nose}
                    />
                </div>
            </div>
            <div className="card-footer">
                <a href={`mylab/${avatar.id}`} type="button" className="btn btn-warning footerbuttons">EDIT</a>
                <button onClick={() => handleClick(avatar.id)} type="button" className="btn btn-danger footerbuttons">DELETE</button>
            </div>
        </div>
    );
};

export const MyMenu = (list, selected, handleClick) =>
    list.map(el => {
        const {name} = el;
        let avatar = el;
 
    return (
        <MenuItem 
            avatar={avatar}
            key={name} 
            selected={selected} 
            handleClick={handleClick}
        />
    );
});

const Arrow = ({ text, className }) => {
    return (
        <div className={className}> 
            <span className={text}></span>
        </div>
    );
};
   
   
const ArrowLeft = Arrow({ text: 'carousel-control-prev-icon', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: 'carousel-control-next-icon', className: 'arrow-next' });
   
const selected = 'item1';

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatars: this.props.avatars,
            selected
        };
        this.menuItems = MyMenu(this.state.avatars, selected, this.handleClick);
    }
    
    handleClick(avatar_id){
        let token = document.querySelector('meta[name="api-token"]').getAttribute('content');
        let init = {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }

        fetch("/api/avatars/" + avatar_id, init).then(res => res.json()).then(
            (result) => {     
                location.reload();
            },
            (error) => {
                
            }
        )
    }

    render() {
        const { selected } = this.state;
        const menu = this.menuItems;

        return (
            <ScrollMenu
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={selected}
                onSelect={key => {
                    this.setState({ selected: key });
                }}
            />
        );
    }
}

