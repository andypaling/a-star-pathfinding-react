import React, { Component, Fragment } from "react";
import OppositeTravelModal from './OppositeTravelModal/OppositeTravelModal';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


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
                <Typography className="opposite-travel-whats-this-cont">
                    <Link onClick={() => this.setState({modalActivated: true})}>
                        What's this?
                    </Link>
                </Typography>
                <OppositeTravelModal
                    show={this.state.modalActivated}
                    onHide={() => this.setState({ modalActivated: false })}
                />
            </Fragment>
        )
    }
}


export default OppositeTravelWhatsThisModalTrigger;
