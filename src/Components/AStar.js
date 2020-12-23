import React, {Component, Fragment} from 'react';
import Grid from './Grid';
import BottomController from './BottomController';
import BadGridWarning from "./BadGridWarning";
import OppositeTravelSwitch from './OppositeTravelSwitch';
import aStar from "../AStarAlgorithm/aStar";


class AStar extends Component {
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
            gridWarningActive: false,
            oppositeTravelAllowed: false,
        };
    };

    findPathAndUpdateState() {
        /*
        Get the path from the start and end as coordinates
        Then, if the path-find is successful, remove all 9's (path elements) currently in the grid (if any)
        Then update the grid state so that 9's represent the stages of the path
         */
        const { grid, start, end } = this.state;
        const path = aStar(grid, start, end, this.state.oppositeTravelAllowed);

        if (this.pathIsValid(path)) {
            this.removeALlPathElements();
            this.fillStateWithPath(path);
            this.setState({ gridWarningActive: false })
        } else {
            this.setState({ gridWarningActive: true })
        }
    }

    pathIsValid(path) {
        return path !== undefined;
    }

    removeALlPathElements() {
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

    fillStateWithPath(path) {
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

    setGridValue(position, value) {
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
        const newGrid = this.getNewGrid(currentGridSize);

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
        const newGrid = this.getNewGrid(newSize);

        this.setState({
            grid: newGrid,
            start: [0, 0],
            end: [newSize-1, newSize-1],
            size: newSize
        })
    }

    getNewGrid(newSize) {
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

    changeAllowedTravelValue(newValue) {
        this.setState({ oppositeTravelAllowed: newValue })
    }

    render() {
        return (
            <Fragment>
                <div className="grid">
                    <Grid
                        grid={this.state.grid}
                        start={this.state.start}
                        end={this.state.end}
                        size={this.state.size}
                        setGridValue={(position, value) => this.setGridValue(position, value)}
                        setStart={(position) => this.setStart(position)}
                        setEnd={(position) => this.setEnd(position)}
                        changeGridSize={(newSize) => this.changeGridSize(newSize)}
                    />
                </div>
                <OppositeTravelSwitch
                    changeAllowedTravelValue={(newValue) => this.changeAllowedTravelValue(newValue)}
                    checked={this.state.oppositeTravelAllowed}
                />
                <BadGridWarning active={this.state.gridWarningActive} />
                <BottomController
                    resetGridToDefault={() => this.resetGridToDefault()}
                    findPathAndUpdateState={() => this.findPathAndUpdateState()}
                />
            </Fragment>
        )
    }
}


export default AStar;


