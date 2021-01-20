import React, { Component } from 'react';
import GridSizeSelectorItem from "./GridSizeSelectorItem";


class GridSizeSelector extends Component {
    render() {
        const { selectedSize, changeGridSize } = this.props;

        return (
            <div className="gridSizeSelector">
                Change Grid Size:
                <div className="gridSizeSelector5x5">
                    <GridSizeSelectorItem
                        value={5}
                        selectedSize={selectedSize}
                        changeGridSize={changeGridSize}
                    />
                </div>
                <div className="gridSizeSelector7x7">
                    <GridSizeSelectorItem
                        value={7}
                        selectedSize={selectedSize}
                        changeGridSize={changeGridSize}
                    />
                </div>
                <div className="gridSizeSelector10x10">
                    <GridSizeSelectorItem
                        value={10}
                        selectedSize={selectedSize}
                        changeGridSize={changeGridSize}
                    />
                </div>
                <div className="gridSizeSelector13x13">
                    <GridSizeSelectorItem
                        value={13}
                        selectedSize={selectedSize}
                        changeGridSize={changeGridSize}
                    />
                </div>
                <div className="gridSizeSelector15x15">
                    <GridSizeSelectorItem
                        value={15}
                        selectedSize={selectedSize}
                        changeGridSize={changeGridSize}
                    />
                </div>
                <div className="gridSizeSelector25x25">
                    <GridSizeSelectorItem
                        value={25}
                        selectedSize={selectedSize}
                        changeGridSize={changeGridSize}
                    />
                </div>
                <div className="gridSizeSelector30x30">
                    <GridSizeSelectorItem
                        value={30}
                        selectedSize={selectedSize}
                        changeGridSize={changeGridSize}
                    />
                </div>
            </div>
        )
    }
}


export default GridSizeSelector;
