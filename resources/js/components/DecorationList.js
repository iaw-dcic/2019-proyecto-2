import React from 'react';
import DecorationListItem from './DecorationListItem';

export default class DecorationList extends React.Component {

    render() {

        const results = this.props.data;
        let templates = results.map(item =>

            <DecorationListItem
                url={item}
                onSelectShirt={this.props.onSelectShirt}
                key={item}
            />

        );

        return (
            <div className="row">
                {templates}
            </div>
        );
    }
}