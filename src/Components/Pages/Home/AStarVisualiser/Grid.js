import React, { Component, Fragment } from 'react';
import Square from './Square';
import GridTileSelector from './GridTileSelector/GridTileSelector';
import GridSizeSelector from "./GridSizeSelector/GridSizeSelector";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'wall',
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        // We must remove the listener as we cannot change state of a unmounted component
        // plus, it is not necessary as grid size will automatically be set on component re-mount.
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        /*
        Is called by the window resize listener. Gets the current window width and
        the current grid size. If the current window width is low enough that the
        current grid size is no longer available to be selected on my grid size selector,
        the grid size will be changed to the next lower value.
         */
        const currentGridSize = this.props.size;
        const currentWindowWidth = window.innerWidth;

        if (currentGridSize === 30 && currentWindowWidth < 1850)
            this.props.changeGridSize(25);
        else if (currentGridSize === 25 && currentWindowWidth < 1500)
            this.props.changeGridSize(15);
        else if (currentGridSize === 15 && currentWindowWidth < 1244)
            this.props.changeGridSize(13);
        else if (currentGridSize === 13 && currentWindowWidth < 1000)
            this.props.changeGridSize(10);
        else if (currentGridSize === 10 && currentWindowWidth < 550)
            this.props.changeGridSize(7);
    }

    squareOnClick(position) {
        switch (this.state.selectedItem) {
            default:
                if(JSON.stringify(position) !== JSON.stringify(this.props.start)) {
                    if(JSON.stringify(position) !== JSON.stringify(this.props.end)) {
                        // Position selected is not a start or end position here
                        if (this.props.grid[position[0]][position[1]] === 1) {
                            this.props.setGridValue(position, 0);
                        } else {
                            this.props.setGridValue(position, 1);
                        }
                    }
                }
                break;

            case 'start':
                if (JSON.stringify(this.props.end) !== JSON.stringify(position)) {
                    this.props.setStart(position);
                }
                break;

            case 'end':
                if (JSON.stringify(this.props.start) !== JSON.stringify(position)) {
                    this.props.setEnd(position);
                }
                break;
        }
    }

    setSelectedItem(newValue) {
        this.setState({ selectedItem: newValue });
    }

    render() {
        const { grid, start, end, size, changeGridSize } = this.props;

        return (
            <Fragment>
                <Container>
                    <Row className="grid-row">
                        <GridTileSelector
                            selectedItem={this.state.selectedItem}
                            setSelectedItem={(newValue) => this.setSelectedItem(newValue)}
                        />
                    </Row>
                    <Row className="grid-row" >
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
        );
    }
}

export default Grid;