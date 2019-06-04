import React from 'react';
import DecorationListItem from './DecorationListItem';

export default class DecorationList extends React.Component {

    render() {
        const decorations = this.props.decorations;
        let templates = decorations.map(decoration =>

            <DecorationListItem
                image={decoration.content}
                onSelectDecoration={this.props.onSelectDecoration}
                key={decoration.id}
                id={decoration.id}

            />
        );

        return (
            <div className="row">
                {templates}
            </div>
        );
    }
}