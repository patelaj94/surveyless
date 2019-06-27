import React from "react";
import Header from "components/Header";
import List from "components/List";
import Card from "components/Card";
import Survey from "api/survey/Survey";
import Swal from "sweetalert2";
import _ from "underscore";
//this function will create the html for the swal butons
//create the input html from a list of input fields
function swal_button_html_create_from_list(button_input_fields) {
  const button_input_fields_html = _.map(button_input_fields, function(D, num) {
    return `<input placeholder="${D}" id="swal-input${num}" class="swal2-input">`;
  });
  const button_input_fields_html_joined = button_input_fields_html.join(" ");
  return button_input_fields_html_joined;
}

//this function will be for the preconfirm which is all the values in the input that we need to get
function swal_button_field_values(button_input_fields) {
  var button_input_values = _.map(button_input_fields, function(D, num) {
    return document.getElementById(`swal-input${num}`).value;
  });
  //return [document.getElementById("swal-input1").value, document.getElementById("swal-input2").value];

  return button_input_values;
}

//create the button dictionary from the result that came out
function swal_button_create_button_dict_from_result(result, button_input_fields) {
  var response_dict = {};
  _.map(button_input_fields, function(D, num) {
    response_dict[D] = result.value[num];
  });
  return response_dict;
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveys: []
    };
  }

  async componentDidMount() {
    const surveys = await Survey.getAll();
    this.setState({ surveys });
    console.log(surveys);
  }

  render() {
    const surveyCards = this.state.surveys.map(s => {
      return (
        <div class="column is-one-quarter">
          <Card name={s.survey_name} question={s.question} />
        </div>
      );
    });
    return (
      <section class="hero is-light is-fullheight">
        <div class="hero-head">
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <span class="navbar-item">Surveyless</span>
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a
                    class="button is-info"
                    onClick={() => {
                      const button_input_fields = ["survey_name", "question", "survey_code"];
                      Swal.fire({
                        title: "Create Survey",
                        html: swal_button_html_create_from_list(button_input_fields),
                        width: 600,
                        preConfirm: () => {
                          return swal_button_field_values(button_input_fields);
                        },
                        padding: "3em",
                        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
                        backdrop: `
													rgba(0,0,123,0.4)
													url("https://sweetalert2.github.io/images/nyan-cat.gif")
													center left
													no-repeat
												`
                      }).then(result => {
                        if (result.value) {
                          const response_dict = swal_button_create_button_dict_from_result(result, button_input_fields);
                          console.log({ response_dict });
                          Survey.create({ body: response_dict });

                          // Survey.getAll().then(x => this.setState({ surveys: x }));
                        }
                      });
                    }}
                  >
                    <strong>Create Survey</strong>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div class="hero-body">
          <div class="container">
            <div />
            <div class="columns is-multiline">{surveyCards}</div>
          </div>
        </div>
      </section>
    );
  }
}
// <input class="input" type="text" placeholder="Search from existing surveys" />
