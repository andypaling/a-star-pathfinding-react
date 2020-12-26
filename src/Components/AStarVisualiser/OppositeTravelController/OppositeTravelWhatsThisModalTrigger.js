import React, { Component, Fragment } from "react";
import OppositeTravelModal from './OppositeTravelModal/OppositeTravelModal';


class OppositeTravelWhatsThisModalTrigger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalActivated: false,
        }
    }

    render() {
        return (
            <Fragment>
                <div className="opposite-travel-whats-this-cont" onClick={() => this.setState({modalActivated: true})}>
                    What's this?
                </div>
                <OppositeTravelModal
                    show={this.state.modalActivated}
                    onHide={() => this.setState({ modalActivated: false })}
                />
            </Fragment>
        )
    }
}


export default OppositeTravelWhatsThisModalTrigger;
