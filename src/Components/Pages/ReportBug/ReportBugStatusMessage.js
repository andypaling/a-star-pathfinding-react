import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab/';
import Snackbar from '@material-ui/core/Snackbar';
import ReportBugErrorList from "./ReportBugErrorList";


function ReportBugStatusMessage(props) {
    const handleClose = () => {
        props.setStatusMessageOpen(false);
    }

    const severity = props.success === true ? "success" : 'error';

    return (
        <Snackbar open={props.open} autoHideDuration={8000} onClose={() => handleClose()}>
            {severity === "success" ? (
                <Alert variant="filled" severity={severity}>
                    {/* POST request was a success, show success alert */}
                    <AlertTitle style={{marginBottom: -10}} className="report-bug-alert-title">
                        Success! The report has been submitted. Thank you.
                    </AlertTitle>
                </Alert>
            ) : (
                <Alert variant="filled" severity={severity}>
                    {/* POST request was a failure, show error alert and list errors from props */}
                    <AlertTitle className="report-bug-alert-title">
                        Uh Oh! The following errors were found in your report form:
                    </AlertTitle>
                    <ReportBugErrorList errors={props.errors} />
                </Alert>
            )}
        </Snackbar>
    )
}


export default ReportBugStatusMessage;