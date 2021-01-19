import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";


function MoreInfoScrollTrigger(props) {
    return (
        <Typography className="opposite-travel-whats-this-cont">
            <Link onClick={() => props.scrollToHeuristicInfo()}>
                More info
            </Link>
        </Typography>
    )
}


export default MoreInfoScrollTrigger;