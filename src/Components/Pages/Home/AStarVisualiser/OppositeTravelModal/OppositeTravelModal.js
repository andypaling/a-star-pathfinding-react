import React from 'react';
import OppositeTravelModalDemo from "./OppositeTravelModalDemo";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function OppositeTravelModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="oppositeTravelModal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Adjacent Travel
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="info-text">
                <p>
                    Adjacent travel specifies weather the path can travel from one tile to another
                    tile diagonal to it.
                </p>
                <p>
                    Switching adjacent travel OFF will mean that the path can only go from one tile
                    to another tile that is on the left, right, top or bottom of the tile.
                </p>
                <p>
                    Switching adjacent travel ON will mean that the path can go from one tile to another
                    in any direction, including tiles diagonal to it.
                </p>
                <OppositeTravelModalDemo />
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


export default OppositeTravelModal
