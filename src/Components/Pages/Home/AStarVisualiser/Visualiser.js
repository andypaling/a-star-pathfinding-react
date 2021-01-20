import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from './Grid';
import BottomButtons from './BottomButtons';
import PathFindStatusMessage from "./PathFindStatusMessage";
import OppositeTravelAccordion from './OppositeTravelAccordion/OppositeTravelAccordion';
import ChangeHeuristicAccordion from "./ChangeHeuristicAccordion/ChangeHeuristicAccordion";
import aStar from "../../../../AStarAlgorithm/aStar";


class Visualiser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Zeros represent free space in the grid, 1's represent walls
            grid: [
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
            ],
            start: [0,0],
            end: [6, 6],
            size: 7,
            pathFindStatusMessageActive: false, // Used to determine if PathFindStatusMessage will show a alert
            pathFindSuccessful: undefined, // Used to decide if PathFindStatusMessage will be a success or error message
            heuristic: 'manhattan',
            oppositeTravelAllowed: false,
        };
    };

    componentDidMount() {
        this.setInitialGridSize();
    }

    setInitialGridSize() {
        /*
        Gets the initial window width and determines sets the initial
        grid size based on that width using the following rules:
        - width less than 550 then grid size = 7
        - width less than 1000 then grid size = 10
        - width greater or equal to 1000 then grid size = 13
         */
        const currentWindowWidth = window.innerWidth;

        if (currentWindowWidth < 550)
            this.changeGridSize(7);
        else if (currentWindowWidth < 1000)
            this.changeGridSize(10);
        else
            this.changeGridSize(13);
    }

    findPathAndUpdateState() {
        /*
        Get the path from the start and end as coordinates
        Then, if the path-find is successful, remove all 9's (path elements) currently in the grid (if any)
        Then update the grid state so that 9's represent the stages of the path
         */
        const { grid, start, end } = this.state;
        const path = aStar(grid, start, end, this.state.oppositeTravelAllowed, this.state.heuristic);

        this.setState({ pathFindStatusMessageActive: true });

        if (this.pathIsValid(path)) {
            this.removePathNodesInGrid();
            this.fillGridWithPath(path);
            this.setState({ pathFindSuccessful: true });
        } else {
            // In this case, the path cannot be found for the given grid, this
            // will be because there is no possible path with the walls given
            this.setState({ pathFindSuccessful: false })
        }
    }

    pathIsValid(path) {
        return path !== undefined;
    }

    removePathNodesInGrid() {
        let newGrid = this.state.grid;

        for (let i = 0; i < newGrid.length; i++) {
            for (let j = 0; j < newGrid[0].length; j++) {
                if (newGrid[i][j] === 9) {
                    newGrid[i][j] = 0;
                }
            }
        }

        return newGrid;
    }

    fillGridWithPath(path) {
        /*
        Set the state so that all index's in which the
        path travels are changed to the value of 9
         */
        let newGrid = this.state.grid;
        const { start, end } = this.state;

        for (let i of path) {
            if (JSON.stringify(i) !== JSON.stringify(start)) {
                if (JSON.stringify(i) !== JSON.stringify(end)) {
                    newGrid[i[0]][i[1]] = 9;
                }
            }
        }

        this.setState({ grid: newGrid })
    }

    setValueOfGridElement(position, value) {
        let newGrid = this.state.grid;
        newGrid[position[0]][position[1]] = value;

        this.setState({ grid:newGrid });
    }

    setStart(position) {
        if (this.state.grid[position[0]][position[1]] !== 1) {
            this.setState({ start: position });
        }
    }

    setEnd(position) {
        if (this.state.grid[position[0]][position[1]] !== 1) {
            this.setState({ end: position });
        }
    }

    resetGridToDefault() {
        const currentGridSize = this.state.grid.length;
        const newGrid = this.getNewEmptyGrid(currentGridSize);

        this.setState({
            grid: newGrid,
            start: [0, 0],
            end: [currentGridSize-1, currentGridSize-1],
            size: currentGridSize
        });
    }

     changeGridSize(newSize) {
        /*
        Changes the grid in state to a new size (more cols & rows)
        We then call the reset grid method so that the walls are removed and end placed correctly
        Param newSize is an int that refers to the new amount of cols and row we will have
        We still then reset the state with the new grid and the new end point.
         */
        const newGrid = this.getNewEmptyGrid(newSize);

        this.setState({
            grid: newGrid,
            start: [0, 0],
            end: [newSize-1, newSize-1],
            size: newSize
        })
    }

    getNewEmptyGrid(newSize) {
        /*
        Returns a new, clean reset grid on newSize amount of cols and rows
         */
        let newGrid = [];

        for (let i = 0; i < newSize; i++) {
            newGrid.push([]);
            for (let j = 0; j < newSize; j++) {
                newGrid[i][j] = 0;
            }
        }

        return newGrid;
    }

    setAllowedTravelValue(newValue) {
        this.setState({ oppositeTravelAllowed: newValue })
    }

    setHeuristicValue(newValue) {
        this.setState({ heuristic: newValue });
    }

    setPathFindStatusMessageActive(newValue) {
        this.setState({ pathFindStatusMessageActive: newValue });
    }

    render() {

        return (
            <div className="a-star-container">
                <div className="grid">
                    <Grid
                        grid={this.state.grid}
                        start={this.state.start}
                        end={this.state.end}
                        size={this.state.size}
                        setGridValue={(position, value) => this.setValueOfGridElement(position, value)}
                        setStart={(position) => this.setStart(position)}
                        setEnd={(position) => this.setEnd(position)}
                        changeGridSize={(newSize) => this.changeGridSize(newSize)}
                    />
                </div>
                <Row>
                    <Col md={6} style={{marginTop: 20}}>
                        <OppositeTravelAccordion
                            setOppositeTravelAllowed={(newValue) => this.setAllowedTravelValue(newValue)}
                            oppositeTravelAllowed={this.state.oppositeTravelAllowed}
                        />
                    </Col>
                    <Col md={6} style={{marginTop: 20}}>
                        <ChangeHeuristicAccordion
                            value={this.state.heuristic}
                            setValue={(newValue) => this.setHeuristicValue(newValue)}
                            scrollToHeuristicInfo={() => this.props.scrollToHeuristicInfo()}
                        />
                    </Col>
                </Row>
                <PathFindStatusMessage
                    active={this.state.pathFindStatusMessageActive}
                    setActive={(newValue) => this.setPathFindStatusMessageActive(newValue)}
                    isSuccessMessage={this.state.pathFindSuccessful}
                />
                <BottomButtons
                    setViewTutorial={(newValue) => this.props.setViewTutorial(newValue)}
                    resetGridToDefault={() => this.resetGridToDefault()}
                    findPathAndUpdateState={() => this.findPathAndUpdateState()}
                />
            </div>
        )
    }
}


export default Visualiser;


