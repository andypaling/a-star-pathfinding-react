import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Home from "./Components/Home/Home";
import ReportBug from "./Components/ReportBug/ReportBug";

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/report-bug" exact component={ReportBug} />
                        <Route path="/" render={() => <div>404</div>} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
