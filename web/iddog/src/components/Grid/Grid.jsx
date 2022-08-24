import React, { Component } from 'react';

import './Grid.css';

export default class Grid extends Component {
    render() {
        let cols = this.props.cols.split(" ");
        cols = `col-${cols[0]} col-sm-${cols[1]}`
        return (
            <div className={`grid ${cols}`}>
                { this.props.children }
            </div>
        );
    }
}