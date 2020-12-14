import React, { Component } from 'react';
import GridSizeSelectorItem from "./GridSizeSelectorItem";


class GridSizeSelector extends Component {
    render() {
        const { selectedSize, changeGridSize } = this.props;

        return (
            <div className="gridSizeSelector">
                Change Grid Size:
                <GridSizeSelectorItem
                    value={7}
                    selectedSize={selectedSize}
                    changeGridSize={changeGridSize}
                />
                <GridSizeSelectorItem
                    value={10}
                    selectedSize={selectedSize}
                    changeGridSize={changeGridSize}
                />
                 <GridSizeSelectorItem
                    value={13}
                    selectedSize={selectedSize}
                    changeGridSize={changeGridSize}
                />
                 <GridSizeSelectorItem
                    value={15}
                    selectedSize={selectedSize}
                    changeGridSize={changeGridSize}
                />
                 <GridSizeSelectorItem
                    value={20}
                    selectedSize={selectedSize}
                    changeGridSize={changeGridSize}
                />
            </div>
        )
    }
}


export default GridSizeSelector;
