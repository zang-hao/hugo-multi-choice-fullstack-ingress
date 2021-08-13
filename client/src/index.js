import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Link, Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import MakeQuiz from './pages/makeQuiz';
import Resume from './pages/resume';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Resume}/>
        <Route exact path="/makeQuiz" component={MakeQuiz}/>

      </Switch>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
