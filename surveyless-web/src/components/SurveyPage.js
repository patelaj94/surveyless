import React, { Component } from 'react'
import {FormGroup, Col, Button} from 'reactstrap'
import {ControlLabel, FormControl, Form} from 'react-bootstrap'
import autobind from 'react-autobind'

class SurveyPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value:'',
      response:[],
      code: ''
    }
    this.handleChange = this.handleChange.bind(this);
    autobind(this)
  }

  componentDidMount() {
    // get here, get all of the metadata about survey
    this.setState({
      code: this.props.match.params.surveyKey,
      question: 'this is a question?'
    });
  }

  handleChange(e) {
    this.setState({
       value: e.target.value
    })
  }


  render() {
    return (
      <main>
        <div className="container-fluid pt-3 text-center">
          <div className="jumbotron mb-5">
              <h1>{this.state.question}</h1>
              <h2>code: {this.state.code}</h2>
          </div>
          <div className="card-deck mx-auto">
            <div className="card">
              <div className="card-body text-center">
                <i className="fas fa-thumbs-up large-thumbs"/>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-center">
                <i className="fas fa-thumbs-down large-thumbs"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }


}
export default SurveyPage
