import React, { Component } from 'react';
import {Button} from "react-bootstrap";


class GridSizeSelectorItem extends Component {
    onClick() {
        this.props.changeGridSize(this.props.value);
    }

    render() {
        const { value, selectedSize } = this.props;

        return (
            <Button variant="outline-secondary" className="sizeSelectorItem" onClick={() => this.onClick()} active={selectedSize === value}>
                {value} x {value}
            </Button>

        )
    }
}


export default GridSizeSelectorItem
