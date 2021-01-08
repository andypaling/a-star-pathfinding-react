import React, {Component, Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import aStarGIF from '../../GIFs/A*_search.gif';


class AlgorithmInfo extends Component {
    render() {
        return (
            <Fragment>
                <hr/>
                <h2 style={{marginBottom: 13}}>About The Algorithm</h2>
                <Row>
                    <Col md="6" className="about-the-alg-col">
                        <p style={{textAlign: 'left'}}>
                            A* is a searching algorithm used in path-finding and graph traversal. It is widely used in games and maps for routing due to its optimal efficiency. A* achieves this efficiency by using heuristics to guide its search. The algorithm was first published in 1968 and can be seen as an extension of <Link target="_blank" href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm">Dijkstra's algorithm</Link> which was published in 1959.
                        </p>
                    </Col>
                    <Col md="6" className="about-the-alg-col">
                        <Card>
                            <img src={aStarGIF} alt=""/>
                            <div className="card-content">
                                <p style={{marginBottom: 10}}>A visual demonstration of A*. Colored circles represent nodes that have been visited</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}


export default AlgorithmInfo;
