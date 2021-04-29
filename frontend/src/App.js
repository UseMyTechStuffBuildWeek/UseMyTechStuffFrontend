import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import AddEquipment from './Components/addEquipment/AddEquipmentFormMain';
import LoginForm from './Components/LoginForm/LoginFormMain';
import FormApp from './Components/EditEquipment/FormApp';
import NewUserForm from './Components/CreateNewUser/NewUserFormMain';
import Renter from './Components/Renter/Renter';
import Owner from './Components/Owner/Owner';
import Homepage from './Components/HomePage/Homepage';
import styled from 'styled-components';

import PrivateRoute from './PrivateRoute';

function App() {
  const logout = () => {
    window.localStorage.removeItem('token');
  };

  // APP STYLES //
  
  const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-family: 'Fira Sans Condensed', sans-serif;
    background-image: linear-gradient(to left, #FFCE00, #FE4880);
    height: 6vh;
    padding: 0 4%;
`

  const StyledLink = styled(Link)`
    color: black;
    background-color: white;
    padding: .2% 2%;
    border-radius: 8px;
    opacity: 80%;
    border: 2px #3a3a3a solid;
  `
  const StyledH1 = styled.h1`
    font-size: 1.8rem;
    border-bottom: 2px solid black;
  `
  // APP STYLES ABOVE //

  return (
    <Router>
      <div className="App">
        <NavBar>
              <StyledLink to="/login">Login</StyledLink>
              <StyledH1>Welcome to UseMyTechStuff!</StyledH1>
              <StyledLink onClick={logout} to="/login">Logout</StyledLink>
        </NavBar>
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
