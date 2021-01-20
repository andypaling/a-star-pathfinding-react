import React from 'react';
import visualiserDemo from '../../../../GIFs/visualiserDemo.gif'

function VisualiserDemo(props) {
    return(
        <div className="visualiser-demo-container">
            <img
                src={visualiserDemo}
                alt="Visualiser Demo could not be loaded"
                className="visualiser-demo-gif"
            />
        </div>
    )
}

export default VisualiserDemo
