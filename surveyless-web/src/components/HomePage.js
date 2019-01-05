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

  handleSubmit(e) {
    this.props.history.push(`/survey/${this.state.value}`);
  }

  render() {
    return (
      <main>
        <div className="container-fluid pt-3 text-center">
          <div className="jumbotron mb-5">
              <h1>welcome to surveyless</h1>
          </div>
          <div className="code-card card w-50 mx-auto">
            <div className="card-body">
            <h3>enter the code below:</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter code here"
                  onChange={this.handleChange}
                />
                <Button type="submit" color="primary">
                  <Link to={`/survey/${this.state.value}`}>Submit</Link>
                </Button>
              </FormGroup>
            </Form>
            </div>
          </div>
          <div className="">Want to create a survey? just click <Link to={`/create`}>here</Link>!
          </div>
        </div>
      </main>
    );
  }

}
export default HomePage
