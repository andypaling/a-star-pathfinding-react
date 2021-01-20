import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { scroller } from 'react-scroll';
import Visualiser from "./AStarVisualiser/Visualiser";
import TutorialAndWelcomeModal from "./TutorialAndWelcomeModal/TutorialAndWelcomeModal";
import AlgorithmInfo from "./AlgorithmInfo/AlgorithmInfo";
import HowAStarWorks from "./HowAStarWorks/HowAStarWorks";
import HeuristicsInfo from "./HeuristicsInfo/HeuristicsInfo";
import FurtherReading from "./FurtherReading/FurtherReading";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewTutorial: undefined,
        };
    }

    componentDidMount() {
        let pageVisited = localStorage["pageVisited"];

        if (pageVisited) {
            // Dont show tutorial modal
            this.setState({ viewTutorial: false });
        } else {
            // This is the first the user has visited the site
            // We need to show the tutorial modal and set the localstorage
            localStorage["pageVisited"] = true;
            this.setState({ viewTutorial: true });
        }
    }

    setViewTutorial(newValue) {
        this.setState({ viewTutorial: newValue });
    }

    scrollToHeuristicInfo() {
        scroller.scrollTo('heuristicInfo', { smooth: true, duration: 1000 });
    }

    render() {
        return (
            <Container>
                <Visualiser
                    setViewTutorial={(newValue) => this.setViewTutorial(newValue)}
                    scrollToHeuristicInfo={() => this.scrollToHeuristicInfo()}
                />
                <TutorialAndWelcomeModal
                    show={this.state.viewTutorial}
                    onHide={() => this.setState({ viewTutorial: false })}
                />
                <AlgorithmInfo />
                <HowAStarWorks />
                <div id="heuristicInfo">
                    <HeuristicsInfo />
                </div>
                <FurtherReading />
            </Container>
        )
    }
}

export default Home;