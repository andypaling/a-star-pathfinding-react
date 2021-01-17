import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import play_arrow from '../../Icons/play_arrow.svg';
import replay from '../../Icons/replay.svg';

import help from '../../Icons/help.svg';


class BottomController extends Component {

    findPathButtonOnClick() {
        this.props.findPathAndUpdateState();
    }

    resetButtonOnClick() {
        this.props.resetGridToDefault();
    }

   tutorialButtonOnClick() {
       this.props.setViewTutorial(true);
   }

    render() {
        return (
            <Row style={{justifyContent: 'center'}}>
                    <div className="bottomController">
                        <Button
                            variant="success"
                            onClick={() => this.findPathButtonOnClick()}
                            style={{margin: "7px 0 7px 0"}}
                            className="bottom-controller-btn"
                        >
                            <img
                                style={{height: 25}}
                                src={play_arrow}
                                alt=""
                            />  Find Path
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => this.resetButtonOnClick()}
                            style={{margin: "0 7px 0 7px"}}
                            className="bottom-controller-btn"
                        >
                            <img
                                style={{height: 25}}
                                src={replay}
                                alt=""
                            />  Reset Grid To Default
                        </Button>

                        <Button
                            variant="primary"
                            onClick={() => this.tutorialButtonOnClick()}
                            style={{margin: "7px 0 7px 0"}}
                            className="bottom-controller-btn"
                        >
                            <img
                                style={{height: 25}}
                                src={help}
                                alt=""
                            />  View Tutorial
                        </Button>
                    </div>
            </Row>
        )
    }
}


export default BottomController;
