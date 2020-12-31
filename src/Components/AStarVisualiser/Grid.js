import React, { Component, Fragment } from 'react';
import Square from './Square';
import GridController from './GridController';
import GridSizeSelector from "./GridSizeSelector/GridSizeSelector";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <Container>
                    <Row className="grid-row">
                        <GridController
                            selectedItem={this.state.selectedItem}
                            changeSelectedItemValue={(newValue) => this.setNewItemValue(newValue)}
                        />
                    </Row>
                    <Row className="grid-row">
                        <GridSizeSelector
                            selectedSize={size}
                            changeGridSize={changeGridSize}
                        />
                        <div style={{display: "inline-table"}}>
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

                    </Row>
                </Container>
            </Fragment>
        )
    }
}


export default Grid;
