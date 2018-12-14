import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Router} from 'react-dom'
import {ControlLabel, FormControl, FormGroup, Button, Form, Col} from 'react-bootstrap'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value:''
    }
  }

  handleChange(e) {
    this.setState({
       value: e.target.value
    })
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">

              <h1 className=".bs-docs-header .container">
                Welcome to the Ultimate Event Management Tool
              </h1>
        </header>

        <div className="jumbotron">

            <h1>Create a New Survey!</h1>
        </div>

        <Form horizontal>
           <FormGroup  controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} xs={2} sm={2} md={2}>
                     Event Name
                   </Col>
                <Col xs={8} sm={10} md={8}>
                   <FormControl
                     type="text"
                     value={this.state.response}
                     placeholder="2018 Global Hackathon"
                     onChange={this.handleChange}
                   />
               </Col>
           </FormGroup>

           <FormGroup  controlId="formHorizontalEmail">
                           <Col componentClass={ControlLabel} xs={2} sm={2} md={2}>
                                Presenter
                              </Col>
                           <Col xs={8} sm={10} md={8}>
                              <FormControl
                                type="text"
                                value={this.state.response}
                                placeholder="Maybe You"
                                onChange={this.handleChange}
                              />
                          </Col>
                      </FormGroup>

           <FormGroup  controlId="formHorizontalEmail">
                           <Col componentClass={ControlLabel} xs={2} sm={2} md={2}>
                                Question Text
                              </Col>
                           <Col xs={8} sm={10} md={8}>
                              <FormControl
                                type="text"
                                value={this.state.response}
                                placeholder="Did you enjoy the event?"
                                onChange={this.handleChange}
                              />
                          </Col>
                      </FormGroup>

            <FormGroup>
                <Col sm={2}>
                  <Button type="submit">Create Survey</Button>
                </Col>
              </FormGroup>
        </Form>

      </div>
    );
  }
}

export default App;
