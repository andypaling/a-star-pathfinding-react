import React, { Component } from 'react';


class Square extends Component {
    getValue() {
        if (this.props.wall) {
            return '#5f5f5f';
        } else if (this.props.start) {
            return 'green';
        } else if (this.props.end) {
            return 'red';
        } else if (this.props.path) {
            return 'yellow';
        } else {
            return null;
        }
    }


    onClick() {
        this.props.squareOnClick(this.props.position)
    }


    render() {
        const color = this.getValue();

        return (
            <div
                className="square"
                style={{backgroundColor: color}}
                onClick={() => this.onClick()}
            />
        )
    }
}


export default Square;
