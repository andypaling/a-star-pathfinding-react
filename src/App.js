import React, { Component } from 'react';
import Visualiser from "./Components/AStarVisualiser/Visualiser";
import Header from './Components/Layout/Header';
import TutorialAndWelcomeModal from './TutorialAndWelcomeModal/TutorialAndWelcomeModal';
import Container from 'react-bootstrap/Container';
import AlgorithmInfo from "./Components/AlgorithmInfo/AlgorithmInfo";

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
            // DO not load tutorial popup
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

    render() {
        return (
            <div className="App">
                <Header/>
                <Container>
                    <Visualiser
                        setViewTutorial={(newValue) => this.changeViewTutorial(newValue)}
                    />
                    <TutorialAndWelcomeModal
                        show={this.state.viewTutorial}
                        onHide={() => this.setState({ viewTutorial: false })}
                    />
                    <AlgorithmInfo />
                </Container>
            </div>
        );
    }
}


export default App;
