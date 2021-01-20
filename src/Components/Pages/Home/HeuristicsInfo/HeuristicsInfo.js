import React, { Fragment } from 'react';
import Link from '@material-ui/core/Link';

function HeuristicsInfo(props) {
    return (
        <Fragment>
            <h2 className="big-header">The Heuristics</h2>
            <p className="info-text">The heuristics takes a key role of the behavior of the algorithm. It gives an estimate of the minimum cost from a given node to the goal node. The heuristics available on this site are Manhattan, Euclidean and Chebyshev:</p>

            <h4 className="heuristic-info-h4">Manhattan:</h4>
            <p className="info-text">
                Manhattan distance is equal to the sum of the absolute values of the differences in the goal node's x and y and the current node's x and y coordinates. Manhattan distance is best suited for square grids where you can travel in 4 directions (like a Bishop in chess). <Link href="https://www.mathscareers.org.uk/taxicab-geometry/" target="_blank">More info</Link>
            </p>
            <div className="code">
                node.h = abs(node.x - goal.x) + abs(node.y - goal.y)
            </div>


            <h4 className="heuristic-info-h4">Euclidean:</h4>
            <p className="info-text h-info">
                Euclidean distance is equal to the length of the line segment between two points. It calculates the distance using Pythagoras Theorem. It is best suited for when travel can occur in any direction. <Link href="https://en.wikipedia.org/wiki/Euclidean_distance" target="_blank">More info</Link>
            </p>
            <div className="code">
                xDist = node.x - goal.x <br/>
                yDist = node.y - goal.y <br/>
                node.h = sqrt(xDist * xDist + yDist * yDist)
            </div>

            <h4 className="heuristic-info-h4">Chebyshev:</h4>
            <p className="info-text h-info">
                Chebyshev distance is equal to the maximum of the absolute values of the differences in the goal node's x and y and the current node's x and y coordinates. Chebyshev distance is best suited for square grids where you can travel in 8 directions (like a King in chess). <Link href="https://en.wikipedia.org/wiki/Chebyshev_distance" target="_blank">More info</Link>
            </p>
            <div className="code">
                xDist = node.x - goal.x <br/>
                yDist = node.y - goal.y <br/>
                node.h = max(xDist, yDist)
            </div>
        </Fragment>
    )
}

export default HeuristicsInfo;