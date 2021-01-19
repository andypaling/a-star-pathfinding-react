import React, { Component } from 'react';
import Header from './Components/Layout/Header';
import Container from 'react-bootstrap/Container';
import Visualiser from "./Components/AStarVisualiser/Visualiser";
import TutorialAndWelcomeModal from './Components/TutorialAndWelcomeModal/TutorialAndWelcomeModal';
import AlgorithmInfo from "./Components/AlgorithmInfo/AlgorithmInfo";
import HowAStarWorks from "./Components/HowAStarWorks/HowAStarWorks";
import HeuristicsInfo from "./Components/HeuristicsInfo/HeuristicsInfo";
import { scroller } from 'react-scroll';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewTutorial: undefined
        };
    }

    componentDidMount() {
        let pageVisited = localStorage["pageVisited"];

        if (pageVisited) {
            // D not load tutorial popup
            this.setState({ viewTutorial: false })
        } else {
            // This is the first time the user has visited the site
            // We need to show the tutorial popup and set the localstorage
            localStorage["pageVisited"] = true;
            this.setState({ viewTutorial: true })
        }
    }

    changeViewTutorial(newValue) {
        this.setState({ viewTutorial: newValue })
    }

    scrollToHeuristicInfo() {
        scroller.scrollTo('heuristicInfo', { smooth: true, duration: 1000 })
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <Container>
                    <Visualiser
                        setViewTutorial={(newValue) => this.changeViewTutorial(newValue)}
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
                </Container>
            </div>
        );
    }
}


export default App;
