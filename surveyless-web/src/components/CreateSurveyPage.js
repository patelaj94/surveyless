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
      question:''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
       name: e.target.value
    })
    console.log(e.target.value);
  }

  handleQuestionChange(e) {
    this.setState({
       value: e.target.value
    })
    console.log(e.target.value);
  }

  handleSubmit(e) {
    this.props.history.push(`/survey/${this.state.value}`);
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
                  placeholder="Please the name of the survey"
                  onChange={this.handleNameChange}
                />
                <FormControl
                  type="text"
                  value={this.state.question}
                  placeholder="please enter your question"
                  onChange={this.handleQuestionChange}
                />
                <Button type="submit" color="primary">
                  <Link to={`/survey/${this.state.value}`}>Submit</Link>
                </Button>
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
