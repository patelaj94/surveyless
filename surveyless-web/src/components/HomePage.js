import React, { Component } from 'react'
import {FormGroup, Col, Button} from 'reactstrap'
import {ControlLabel, FormControl, Form} from 'react-bootstrap'
import autobind from 'react-autobind'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
       value: e.target.value
    })
  }

  getValidationState(e) {

  }

  handleSubmit(e) {
    this.props.history.push(`/survey/${this.state.value}`);
  }

  render() {
    return (
      <main>
        <div className="container-fluid pt-3 text-center">
          <div className="jumbotron">
              <h1>welcome to surveyless</h1>
          </div>
          <div className="code-card card w-50 mx-auto">
            <div className="card-body">
            <h2>enter the code below:</h2>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter code here"
                  onChange={this.handleChange}
                />
                <Button type="submit">
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
export default HomePage
