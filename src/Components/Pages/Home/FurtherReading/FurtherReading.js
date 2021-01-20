import React, { Fragment } from 'react';
import Link from '@material-ui/core/Link';

function FurtherReading(props) {
    return (
        <Fragment>
            <h2 className="big-header">Further Reading</h2>
            <p className="info-text">
                Below are some links to some useful resources for understanding A* search and its workings:
            </p>
            <p className="info-text">
                <ul style={{marginLeft: 40}}>
                    <li>
                        <Link href="https://en.wikipedia.org/wiki/A*_search_algorithm" target="_blank">A* search algorithm Wikipedia page</Link>
                    </li>
                    <li>
                        <Link href="https://www.youtube.com/watch?v=6TsL96NAZCo" target="_blank">A* search Youtube video</Link>
                    </li>
                    <li>
                        <Link href="https://theory.stanford.edu/~amitp/GameProgramming/AStarComparison.html" target="_blank">Standford theory - Introduction to A*</Link>
                    </li>
                    <li>
                        <Link href="https://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html" target="_blank">Standford theory - Heuristics</Link>
                    </li>
                </ul>
            </p>
        </Fragment>
    );
}

export default FurtherReading;