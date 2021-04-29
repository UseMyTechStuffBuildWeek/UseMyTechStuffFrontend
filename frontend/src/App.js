import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import AddEquipment from './Components/addEquipment/AddEquipmentFormMain';
import LoginForm from './Components/LoginForm/LoginFormMain';
import FormApp from './Components/EditEquipment/FormApp';
import NewUserForm from './Components/CreateNewUser/NewUserFormMain';
import Renter from './Components/Renter/Renter';
import Owner from './Components/Owner/Owner';
import Homepage from './Components/HomePage/Homepage';

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
          <PrivateRoute exact path="/editequipment/:id">
            <FormApp />
          </PrivateRoute>
          <PrivateRoute exact path="/addequipment" component={AddEquipment} />
          <PrivateRoute exact path="/renter" component={Renter} />
          <PrivateRoute exact path="/owner" component={Owner} />
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/createuser">
            <NewUserForm />
          </Route>
          <Route exact path="/">
            <Homepage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
