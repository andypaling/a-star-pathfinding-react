import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ReportBugForm from "./ReportBugForm";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#007bff',
        }
    },
})

function ReportBug(props) {
    return (
        <MuiThemeProvider theme={theme}>
            <Container>
                <h2 className="big-header">Report A Bug</h2>
                <Row>
                    <Col md={5} className="report-bug-col">
                        <p className="info-text">If you have found a bug of any kind on the site, it would be appreciated if you reported it here. Just simply fill out the form for submit the report. The more information you provide the easier it is for me. Thank you.</p>
                    </Col>
                    <Col md={7} className="report-bug-col">
                        <ReportBugForm />
                    </Col>
                </Row>
            </Container>
        </MuiThemeProvider>
    )
}

export default ReportBug;