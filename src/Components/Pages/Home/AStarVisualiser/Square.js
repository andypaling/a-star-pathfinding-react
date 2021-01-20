import React from 'react';

function Square(props) {
    const getValue = () => {
        if (props.wall) {
            return '#5f5f5f';
        } else if (props.start) {
            return '#28a745';
        } else if (props.end) {
            return '#dc3545';
        } else if (props.path) {
            return 'yellow';
        } else {
            return null;
        }
    }

    const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.squareOnClick(props.position)
    }

    const onMouseEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.buttons === 1) {
            props.squareOnClick(props.position);
        }
    }

    return (
        <div
            className="square"
            style={{backgroundColor: getValue()}}
            onMouseEnter={(e) => {onMouseEnter(e)}}
            onMouseDown={(e) => onClick(e)}
        />
    )
}

export default Square;
