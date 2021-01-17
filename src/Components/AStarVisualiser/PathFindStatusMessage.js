import { React, Fragment, Component } from 'react';
import { Alert } from '@material-ui/lab/';
import Snackbar from '@material-ui/core/Snackbar';

class PathFindStatusMessage extends Component {

    render() {
        const { active, isSuccessMessage } = this.props;

        return (
            <Snackbar open={active} autoHideDuration={6000} onClose={() => this.props.setActive(false)}>
                    <Alert variant="filled" severity={isSuccessMessage === true ? 'success' : 'error'} onClose={() => this.props.setActive(false)}>
                        {isSuccessMessage === false ? (
                            <Fragment>
                                {/* This will be rendered in the alert if the path find is a success */}
                                <strong>Uh Oh!  </strong>
                                It is not possible to find a path on the maze you have provided, please try again...
                            </Fragment>
                        ) : (
                            <Fragment>
                                <strong>Success!  </strong>
                                {/* This will be rendered in the alert if the path find was not successful */}
                                The path for the maze you submitted has been solved!
                            </Fragment>
                        )}
                    </Alert>
            </Snackbar>
        );
    }
}


export default PathFindStatusMessage;
