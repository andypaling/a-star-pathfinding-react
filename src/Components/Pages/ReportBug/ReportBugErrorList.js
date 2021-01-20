import React from 'react';

function ReportBugErrorList(props) {
    return (
        <ul className="report-bug-error-list">
            {props.errors.map((errorMsg, key) => (
                <li key={key}>
                    {errorMsg}
                </li>
            ))}
        </ul>
    )
}

export default ReportBugErrorList;