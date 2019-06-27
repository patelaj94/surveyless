import React from 'react'
import Header from 'components/Header'
import List from 'components/List'
import Card from 'components/Card'
import Survey from 'api/survey/Survey'

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			surveys: []
		}
	}

	async componentDidMount() {
		const surveys = await Survey.getAll()
		this.setState({ surveys })
		console.log(surveys)
	}

	render() {
		const surveyCards = this.state.surveys.map(s => {
			return (
				<div class="column is-one-quarter">
					<Card name={s.survey_name} question={s.question}/>
				</div>
			)
		})
		return (
			<section class="hero is-light is-fullheight">
				<div class="hero-head">
					<nav class="navbar" role="navigation" aria-label="main navigation">
						<div class="navbar-brand">
							<span class="navbar-item">Surveyless</span>
							<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
							</a>
						</div>
					</nav>
				</div>
				<div class="hero-body">
					<div class="container">
						<div>
							<input class="input" type="text" placeholder="Search from existing surveys" />
						</div>
						<div class="columns is-multiline">
							{surveyCards}
						</div>
					</div>
				</div>
			</section>
		)
	}
}
