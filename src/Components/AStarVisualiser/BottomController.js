import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import replay from '../../Icons/replay.svg';
import play_arrow from '../../Icons/play_arrow.svg';

class BottomController extends Component {
    resetButtonOnClick() {
        this.props.resetGridToDefault();
    }

    findPathButtonOnClick() {
        this.props.findPathAndUpdateState();
    }


    render() {
        return (
            <Row style={{justifyContent: 'center'}}>
                    <div className="bottomController">
                        <Button
                            variant="primary"
                            onClick={() => this.resetButtonOnClick()}
                            className="bottom-controller-top-btn"
                        >
                            <img style={{height: 25}} src={replay} alt=""/> Reset Grid To Default
                        </Button>
                        <Button
                            variant="success"
                            onClick={() => this.findPathButtonOnClick()}
                            className="bottom-controller-bottom-btn"
                        >
                            <img style={{height: 25}} src={play_arrow} alt=""/>
                            Find Path
                        </Button>
                </div>
            </Row>
        )
    }
}


export default BottomController;
