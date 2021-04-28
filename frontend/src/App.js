import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AddEquipment from './Components/addEquipment/AddEquipmentFormMain';
import LoginForm from './Components/LoginForm/LoginFormMain';
import FormApp from './Components/EditEquipment/FormApp';
import NewUserForm from './Components/CreateNewUser/NewUserFormMain';

import PrivateRoute from './PrivateRoute';

function App() {
  const logout = () => {
    window.localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout} to="/login">
              Logout
            </Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/editequipment" component={FormApp} />
          <PrivateRoute exact path="/addequipment" component={AddEquipment} />
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/createuser">
            <NewUserForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
