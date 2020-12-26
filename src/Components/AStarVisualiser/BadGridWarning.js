import React, { Fragment } from 'react';


function BadGridWarning(props) {
    return (
        <Fragment>
            {props.active ? (
                <div className="badGridWarning">
                    There is no possible path from the start to the end of the path you just gave.
                </div>
            ) : ''}
        </Fragment>
    )
}


export default BadGridWarning
