import React, { Component, Fragment } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button";
import { DataStore } from '@aws-amplify/datastore';
import { Report } from '../../../models';
import ReportBugStatusMessage from "./ReportBugStatusMessage";
import ReCAPTCHA from "react-google-recaptcha";


class ReportBugForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: "",
            email: "",
            description: "",
            errors: [],
            statusMessageOpen: false,
            statusMessageSuccess: false,
            notARobot: false,
        };
    };

    handleSubmit() {
        // Safety feature
        if (!this.state.notARobot) {
            return;
        }

        let errorsPresent = false;
        this.setState({ errors: [] })

        if (this.state.summary.length < 1) {
            errorsPresent = true;
            this.addErrorToState("Summary field is missing.");
        }
        if (this.state.email.length > 0 && !this.emailIsValid(this.state.email)) {
            errorsPresent = true;
            this.addErrorToState("Email is not valid.")
        }

        if (errorsPresent) {
            this.handleUnsuccessfulPOST();
        } else {
            this.createNewReport().then(() => this.handleSuccessfulPOST());
        }
    }

    async createNewReport() {
        /*
        Creates new report for AWS amplify api
         */
        const summary = this.state.summary;
        const email = this.state.email === "" ? undefined : this.state.email;
        const description = this.state.description === "" ? undefined : this.state.description;
        const date = new Date().toISOString().substring(0, 10) // Get date in format for AWSDate


        await DataStore.save(
            new Report({
                "summary": summary,
                "description": description,
                "email": email,
                "date": date,
            })
        );
    }


    handleSuccessfulPOST() {
        /*
        Sets the state so that the reportBugStatusMessage will open with the success bool set to true
        and that all of the input fields are reset to an empty string so that the inputs are cleared.
         */
        this.setState({
            summary: "",
            email: "",
            description: "",
            statusMessageOpen: true,
            statusMessageSuccess: true
        });
        
        location.reload()
    }

    handleUnsuccessfulPOST() {
        /*
        Sets the state so that the reportBugStatusMessage will open with the success bool set to false
         */
        this.setState({
            statusMessageOpen: true,
            statusMessageSuccess: false,
        })
    }

    handleChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
    }

    emailIsValid(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    addErrorToState(newError) {
        this.setState(prevState => ({
            errors: [...prevState.errors, newError]
        }));
    }

    setStatusMessageOpen(newValue) {
        this.setState({ statusMessageOpen: newValue });
    }

    render() {
        return (
            <Fragment>
                <form noValidate autoComplete="off">
                    <TextField
                        required
                        className="report-bug-text-field"
                        variant="outlined"
                        color="primary"
                        name="summary"
                        label="Summary"
                        helperText="Required"
                        value={this.state.summary}
                        onChange={(e) => this.handleChange(e)}
                    /> <br/>

                    <TextField
                        style={{marginTop: 15}}
                        className="report-bug-text-field"
                        variant="outlined"
                        color="primary"
                        name="email"
                        label="Email"
                        helperText="Not required"
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e)}
                    /> <br/>

                    <TextField
                        multiline
                        style={{marginTop: 15}}
                        className="report-bug-text-field"
                        variant="outlined"
                        color="primary"
                        rows={5}
                        name="description"
                        label="More Details"
                        helperText="Not required"
                        value={this.state.description}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <ReCAPTCHA
                        style={{paddingTop: 15}}
                        sitekey="6LeIezMaAAAAAGZEqmjyr1AE2gKLp27M3HvVnNtl"
                        onChange={() => {this.setState({ notARobot: true })}}
                    />
                    <Button
                        disabled={!this.state.notARobot}
                        onClick={() => this.handleSubmit()}
                        variant="outline-secondary"
                        className="report-bug-submit-btn info-text"
                    >
                        Submit Issue
                    </Button>
                </form>
                <ReportBugStatusMessage
                    setStatusMessageOpen={(newValue) => this.setStatusMessageOpen(newValue)}
                    open={this.state.statusMessageOpen}
                    success={this.state.statusMessageSuccess}
                    errors={this.state.errors}
                />
            </Fragment>
        )
    }
}


export default ReportBugForm;
