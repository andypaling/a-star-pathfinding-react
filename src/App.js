import React, { Component } from 'react';
import AStar from "./Components/AStar";
import Header from './Components/Layout/Header';
import TutorialModal from './Components/Layout/Modals/TutorialModal/TutorialModal';

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

    render() {
        return (
            <div className="App">
                <Header/>
                <AStar/>
                <TutorialModal
                    show={this.state.viewTutorial}
                    onHide={() => this.setState({ viewTutorial: false })}
                />
            </div>
        );
    }
}


export default App;
