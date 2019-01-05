import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import {AppContainer} from 'react-hot-loader'
import {BrowserRouter} from 'react-router-dom'
import 'styles/app.scss'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
  );
}
render(App);

if(module.hot) {
  module.hot.accept('./components/App.js', () => {
    const NextApp = require('./components/App.js').default;
    render(NextApp);
  });
}
