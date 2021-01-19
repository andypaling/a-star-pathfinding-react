import React from 'react';
import Card from "@material-ui/core/Card";
import aStarGIF from "../../../GIFs/A*_search.gif";

function DemonstrationGIF(props) {
    return (
        <Card>
            <img src={aStarGIF} alt=""/>
            <div className="card-content">
                <p style={{marginBottom: 10}}>A visual demonstration of A*. Colored circles represent nodes that have been visited</p>
            </div>
        </Card>
    )
}

export default DemonstrationGIF;
