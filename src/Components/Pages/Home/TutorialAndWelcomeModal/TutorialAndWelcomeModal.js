import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import GridTileSelector from "../AStarVisualiser/GridTileSelector/GridTileSelector";
import VisualiserDemo from "./VisualiserDemo";

function TutorialAndWelcomeModal(props) {
    const [selectedItem, setSelectedItem] = useState(undefined);

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="tutorialModal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        A* Pathfinding Algorithm Visualiser
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="info-text">
                    <p>
                        On this site is an interactive visualiser for the A* pathfinding algorithm,
                         which can be used to find the shortest path from a set start and end point around a
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
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
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
                        onClick={props.onHide}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
}

export default TutorialAndWelcomeModal;


