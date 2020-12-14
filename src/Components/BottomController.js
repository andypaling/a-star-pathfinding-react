import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class BottomController extends Component {
    resetButtonOnClick() {
        this.props.resetGridToDefault();
    }

    findPathButtonOnClick() {
        this.props.findPathAndUpdateState();
    }


    render() {
        return (
            <div className="bottomController">
                <Button
                    variant="outline-secondary"
                    onClick={() => this.resetButtonOnClick()}
                    style={{marginRight: 10}}>
                    Reset Grid To Default
                </Button>

                <Button
                    variant="outline-secondary"
                    style={{marginRight: 10}}
                    onClick={() => this.findPathButtonOnClick()}>
                    Find Path
                </Button>
            </div>
        )
    }
}


export default BottomController;
