import React, { Fragment } from 'react';
import Link from '@material-ui/core/Link';
import MathFunctionFCharacter from "./MathFunctionFCharacter";

function HowAStarWorks(props) {
    return (
        <Fragment>
            <h2 className="alg-info-header">How A* Works</h2>
                <p className="info-text"> A* achieves its efficiency by combining characteristics from both <Link href="https://en.wikipedia.org/wiki/Best-first_search" target="_blank">Greedy best-first search</Link> and <Link href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm" target="_blank">Dijkstra's Algorithm</Link>. This is because it finds the shortest path like Dijkstra's whilst taking advantage of a heuristic to do so like Greedy BFS. Consider a maze with a start point and an end point, simply, at each step of the route, A* will pick the next point based on which point has the lowest <MathFunctionFCharacter /> value.</p>
                <div className="f-value-explanation">
                    <p className="info-text">A nodes <MathFunctionFCharacter /> value is calculated using the following:</p>
                    <div className="f-value-formula-cont">
                        <p>𝑓(𝑛) + 𝑔(𝑛) + ℎ(𝑛)</p>
                    </div>
                    <p className="info-text">Where that:
                        <ul style={{marginLeft: 40}}>
                            <li><strong>𝑔(𝑛)</strong> is equal to the exact cost of the path from the start node to the given node (n)</li>
                            <li><strong>ℎ(𝑛)</strong> is equal to the heuristic estimated cost from the node (n) to the end node</li>
                        </ul>
                    </p>
                </div>
        </Fragment>
    )
}

export default HowAStarWorks;
