import { React, Fragment, Component } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab/';
import MuiCollapse from '@material-ui/core/Collapse';

class PathFindStatusMessage extends Component {

    render() {
        const { active, isSuccessMessage } = this.props;

        return (
            <MuiCollapse in={active}>
                <div className="bad-grid-warning-alert-cont">
                    <Alert severity={isSuccessMessage === true ? 'success' : 'error'}>
                        {isSuccessMessage === false ? (
                            <Fragment>
                                {/* This will be rendered in the alert if the path find is a success */}
                                <AlertTitle>
                                    <strong>Uh Oh!</strong>
                                </AlertTitle>
                                It is not possible to find a path on the maze you have provided, please try again...
                            </Fragment>
                        ) : (
                            <Fragment>
                                <AlertTitle>
                                    <strong>Success!</strong>
                                </AlertTitle>
                                {/* This will be rendered in the alert if the path find was not successful */}
                                The path for the maze you submitted has been solved!
                            </Fragment>
                        )}
                    </Alert>
                </div>
            </MuiCollapse>
        );
    }
}


export default PathFindStatusMessage;
