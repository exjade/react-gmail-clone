import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import EmailList from './components/EmailList/EmailList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Route path="/mail">

          </Route>
          <Route path="/">
            <EmailList />
          </Route>
          <Switch>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
