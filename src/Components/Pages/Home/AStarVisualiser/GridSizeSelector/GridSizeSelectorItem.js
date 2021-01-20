import React from 'react';
import {Button} from "react-bootstrap";

function GridSizeSelectorItem({ value, selectedSize, changeGridSize }) {
    const onClick = () => {
        changeGridSize(value);
    }

    return (
        <Button
            variant="outline-secondary"
            className="sizeSelectorItem"
            onClick={() => onClick()}
            active={selectedSize === value}
        >
            {value} x {value}
        </Button>

    );
}

export default GridSizeSelectorItem
