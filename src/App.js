import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList/EmailList';
import Header from './components/Header/Header';
import Email from './components/Mail/Email';
import SendMail from './components/SendMail/SendMail';
import Sidebar from './components/Sidebar/Sidebar';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  const user = useSelector(selectUser)

  return (
    <Router>
      {
        !user ?
          (<Login />)
          :
          (
            <div className="app">
              <Header />
              <div className="app__body">
                <Sidebar />
                <Switch>
                  <Route path="/mail">
                    <Email />
                  </Route>
                  <Route path="/">
                    <EmailList />
                  </Route>
                </Switch>
              </div>
              {sendMessageIsOpen && <SendMail />}
            </div>
          )
      }
    </Router>
  );
}

export default App;
