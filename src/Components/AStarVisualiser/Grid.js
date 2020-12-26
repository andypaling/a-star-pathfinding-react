import React, { Component, Fragment } from 'react';
import Square from './Square';
import GridController from './GridController';
import GridSizeSelector from "./GridSizeSelector/GridSizeSelector";


class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'wall',
        }
    }

    setNewItemValue(newValue) {
        this.setState({ selectedItem: newValue })
    }

    squareOnClick(position) {
        switch (this.state.selectedItem) {
            default:
                if(JSON.stringify(position) !== JSON.stringify(this.props.start)) {
                    if(JSON.stringify(position) !== JSON.stringify(this.props.end)) {
                        // Position selected is not a start or end position here
                        if (this.props.grid[position[0]][position[1]] === 1) {
                            this.props.setGridValue(position, 0)
                        } else {
                            this.props.setGridValue(position, 1)
                        }
                    }
                }
                break;

            case 'start':
                if (JSON.stringify(this.props.end) !== JSON.stringify(position)) {
                    this.props.setStart(position)
                }
                break;

            case 'end':
                if (JSON.stringify(this.props.start) !== JSON.stringify(position)) {
                    this.props.setEnd(position)
                }
                break;
        }
    }

    render() {
        const { grid, start, end, size, changeGridSize } = this.props;

        return (
            <Fragment>
                <div>
                    <GridController
                        selectedItem={this.state.selectedItem}
                        changeSelectedItemValue={(newValue) => this.setNewItemValue(newValue)}
                    />
                    {grid.map((row, row_index) => (
                        <div className="grid-row">
                            {row.map((square, col_index) => (
                                <Square
                                    position={[row_index, col_index]}
                                    wall={square === 1}
                                    start={JSON.stringify(start) === JSON.stringify([row_index, col_index])}
                                    end={JSON.stringify(end) === JSON.stringify([row_index, col_index])}
                                    path={grid[row_index][col_index] === 9}
                                    squareOnClick={(position) => this.squareOnClick(position)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <GridSizeSelector
                    selectedSize={size}
                    changeGridSize={changeGridSize}
                />
            </Fragment>
    )
    }
}


export default Grid;
