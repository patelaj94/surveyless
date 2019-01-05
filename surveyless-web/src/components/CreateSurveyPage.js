import React, { Component } from 'react'
import {FormGroup, Col, Button} from 'reactstrap'
import {ControlLabel, FormControl, Form} from 'react-bootstrap'
import autobind from 'react-autobind'
import {Link} from 'react-router-dom'

class CreateSurveyPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name:'',
      question:'',
      showResult: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
       name: e.target.value
    })
  }

  handleQuestionChange(e) {
    this.setState({
       question: e.target.value
    })
  }


  handleSubmit(e) {
    // post here, display link to survey with random kyEyQEagBC5mBEFlIYvdg
    // response from post
    e.preventDefault();
    this.setState({
      showResult: true,
      value: 1231231
    })
  }

  render() {
    return (
      <main>
        <div className="container-fluid pt-3 text-center">
          <div className="jumbotron mb-5">
              <h1>create a survey</h1>
          </div>
          <div className="code-card card w-50 mx-auto">
            <div className="card-body">
            <Form onSubmit={this.handleSubmit} >
              <FormGroup>
                <FormControl
                  type="text"
                  className="mb-3"
                  value={this.state.name}
                  placeholder="please enter the name of the survey"
                  onChange={this.handleNameChange}
                />
                <FormControl
                  type="text"
                  value={this.state.question}
                  placeholder="please enter your question"
                  onChange={this.handleQuestionChange}
                />
                {this.state.showResult ? <div style={{ fontSize: '18px' }} className="pt-3">
                  <h6>thanks! take a look at your survey! </h6>
                  <Link to={`/survey/${this.state.value}`} >{location.host}/survey/{this.state.value}</Link>
                  </div> : <Button type="submit" color="primary">Submit</Button>}
              </FormGroup>
            </Form>
            </div>
          </div>
        </div>
      </main>
    );
  }

}
export default CreateSurveyPage
