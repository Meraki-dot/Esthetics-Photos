import React from 'react';
import './cssNonRetina/AppNonRetina.css';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import UserPage from './pages/UserPage';
import DetailsPage from './pages/DetailsPage';
import LoginScreen from './pages/LoginScreen';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginScreen}/>
        <Route path='/main' render={(props) => <Main {...props} />} />
        <Route path="/users/collection" render={(props) => <UserPage {...props} />} />
        <Route path="/users/:id" render={(props) => <DetailsPage {...props} />} />
        <Route path='/result' component={ResultsPage} />
      </Switch>
    </div>
  );
}

export default App;
