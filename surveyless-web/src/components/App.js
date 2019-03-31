import React, { Component } from 'react'
import {Route, Router} from 'react-router-dom'
import {Switch} from 'react-router'
import HomePage from './HomePage.js'
import CreateSurveyPage from './CreateSurveyPage.js'
import autobind from 'react-autobind'
import SurveyPage from './SurveyPage.js'
import CreateBrowserHistory from 'history/createBrowserHistory'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.history = new CreateBrowserHistory();
    autobind(this);
  }

  render(){
    return (
      <Router history={this.history}>
        <div>
          <main>
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/create" component={CreateSurveyPage} />
                <Route exact path="/survey/:surveyKey" component={SurveyPage} />
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App