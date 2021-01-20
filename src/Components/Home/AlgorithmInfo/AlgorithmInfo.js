import React, {Component, Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from '@material-ui/core/Link';
import DemonstrationGIF from "./DemonstrationGIF";

class AlgorithmInfo extends Component {
    render() {
        return (
            <Fragment>
                <hr/>
                <h2 className="big-header">About The Algorithm</h2>
                <Row>
                    <Col md="6" className="about-the-alg-col" style={{paddingLeft: 0}}>
                        <p className="info-text">
                            A* is a searching algorithm used in path-finding and graph traversal. It is widely used in games and maps for routing due to its optimal efficiency. A* achieves this efficiency by using heuristics to guide its search. The algorithm was first published in 1968 and can be seen as an extension of <Link target="_blank" href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm">Dijkstra's algorithm</Link> which was published in 1959.
                        </p>
                    </Col>
                    <Col md="6" className="about-the-alg-col">
                        <DemonstrationGIF />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}


export default AlgorithmInfo;
