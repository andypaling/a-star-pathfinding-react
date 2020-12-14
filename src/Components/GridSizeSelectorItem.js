import React, { Component } from 'react';


class GridSizeSelectorItem extends Component {
    onClick() {
        this.props.changeGridSize(this.props.value);
    }

    render() {
        const { value, selectedSize } = this.props;

        return (
            <div className="sizeSelectorItem" style={{backgroundColor: selectedSize === value ? '#848484' : ''}}
                 onClick={() => this.onClick()}>
                {value} x {value}
            </div>
        )
    }
}


export default GridSizeSelectorItem
