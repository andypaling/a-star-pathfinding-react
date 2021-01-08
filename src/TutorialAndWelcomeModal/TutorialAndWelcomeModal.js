import React, { Component } from 'react';
import GridTileSelector from "../Components/AStarVisualiser/GridTileSelector/GridTileSelector";
import VisualiserDemo from "./VisualiserDemo";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class TutorialAndWelcomeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
        }
    }

    setSelectedItemValue(newValue) {
        this.setState({ selectedItem: newValue });
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="tutorialModal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        A* Pathfinding Algorithm Visualiser
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        On this site is an interactive visualiser for the A* pathfinding algorithm,
                         where you can find the closest path from a set start and end point around a
                        given set of walls which can all be placed on the grid.
                    </p>
                    <h4>
                        Using the visualiser:
                    </h4>
                    <p>
                        Placing items on the grid: Firstly select the tile type you wish to use from
                        the selector that will look and behave like this:
                    </p>
                    <GridTileSelector
                        selectedItem={this.state.selectedItem}
                        changeSelectedItemValue={(newValue) => this.setSelectedItemValue(newValue)}
                    />
                    <p>
                        Then, click on the square on the grid to occupy it with your chosen tile.
                        If wish to remove a wall, click on it and it will remove itself.
                    </p>
                    <p>
                        Finally, press the Find Path button located under the grid. The path will be
                        filled with yellow squares. An example below shows correct usage:
                    </p>
                    <VisualiserDemo />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-secondary"
                        onClick={this.props.onHide}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


export default TutorialAndWelcomeModal;


