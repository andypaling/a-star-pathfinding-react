import React from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import play_arrow from '../../../../Icons/play_arrow.svg';
import replay from '../../../../Icons/replay.svg';
import help from '../../../../Icons/help.svg';

function BottomButtons(props) {
    const findPathButtonOnClick = () => {
        props.findPathAndUpdateState();
    }

    const resetButtonOnClick = () => {
        props.resetGridToDefault();
    }

    const tutorialButtonOnClick = () => {
        props.setViewTutorial(true);
    }

    return (
        <Row style={{justifyContent: 'center'}}>
            <div className="bottomController">
                <Button
                    variant="success"
                    onClick={() => findPathButtonOnClick()}
                    style={{margin: "7px 0 7px 0", fontSize: 19}}
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
                    onClick={() => resetButtonOnClick()}
                    style={{margin: "0 7px 0 7px", fontSize: 19}}
                    className="bottom-controller-btn"
                >
                    <img
                        style={{height: 25}}
                        src={replay}
                        alt=""
                    />  Reset Grid
                </Button>

                <Button
                    variant="primary"
                    onClick={() => tutorialButtonOnClick()}
                    style={{margin: "7px 0 7px 0", fontSize: 19}}
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

export default BottomButtons;
