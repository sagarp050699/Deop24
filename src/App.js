import {BrowserRouter, Route} from 'react-router-dom'
import { Switch } from 'react-router-dom';

import LoginRoute from './components/LoginRoute'
import ChatRoute from './components/ChatRoute'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/login" component={LoginRoute} />
      <ProtectedRoute exact path='/' component={ChatRoute}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
