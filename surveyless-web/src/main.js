import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import {AppContainer} from 'react-hot-loader'
import {BrowserRouter} from 'react-router-dom'
import './styles/app.scss'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
}
render(App);

if(module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App.js').default;
    render(NextApp);
  });
}
