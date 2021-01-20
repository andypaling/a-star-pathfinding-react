import React, { useState, Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import OppositeTravelModal from '../OppositeTravelModal/OppositeTravelModal';

function OppositeTravelWhatsThisModalTrigger(props) {
    const [modalActivated, setModalActivated] = useState(false);

    return (
        <Fragment>
            <Typography className="opposite-travel-whats-this-cont">
                <Link onClick={() => setModalActivated(true)}>
                    What's this?
                </Link>
            </Typography>
            <OppositeTravelModal
                show={modalActivated}
                onHide={() => setModalActivated(false)}
            />
        </Fragment>
    )
}

export default OppositeTravelWhatsThisModalTrigger;
