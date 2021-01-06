import React, { Component } from 'react';


class Square extends Component {
    getValue() {
        if (this.props.wall) {
            return '#5f5f5f';
        } else if (this.props.start) {
            return '#28a745';
        } else if (this.props.end) {
            return '#dc3545';
        } else if (this.props.path) {
            return 'yellow';
        } else {
            return null;
        }
    }


    onClick(e) {
        e.stopPropagation();
        this.props.squareOnClick(this.props.position)
    }

    onMouseEnter(e) {
        e.stopPropagation();
        if (e.buttons === 1) {
            this.props.squareOnClick(this.props.position);
        }
    }


    render() {
        const color = this.getValue();

        return (
            <div
                className="square"
                style={{backgroundColor: color}}
                onMouseEnter={(e) => {this.onMouseEnter(e)}}
                onClick={(e) => this.onClick(e)}
            />
        )
    }
}


export default Square;
