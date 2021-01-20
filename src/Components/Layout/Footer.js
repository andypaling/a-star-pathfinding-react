import React from 'react';
import Link from '@material-ui/core/Link'

function Footer(props) {
    return (
        <div className="footer text-muted">
            If you believe you have found an issue with the site. Please <Link href="/report-bug" style={{fontWeight: "bold"}}>issue a report.</Link>
        </div>
    )
}

export default Footer;