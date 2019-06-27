import React from 'react';
import logo from './logo.svg';
import Survey from 'api/survey/Survey'
import './App.css';

class App extends React.Component {

	async componentDidMount() {
		console.log(Survey)
		const res = await Survey.getAll()
		console.log(await res)
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
