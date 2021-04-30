import React from 'react';

import { useHistory } from "react-router-dom";

import styled, { keyframes } from 'styled-components';

//style
const kf = keyframes`
  from {
    top:-80%;
  }

  to{
    top:-19%;
  }
`

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 94vh;
  background-color: #53565a;
  
  button {
    appearance: none;
    background: linear-gradient(to bottom right, #FE4880, #FFCE00);
    border: none;
    outline: none;
    display:inline-block;
    padding: 18px 45px;
    border-radius: 8px;
    cursor:pointer;
    font-weight:700;
    width: 90%;
    font-size: 1.1rem;

    &:hover {
      filter:brightness(1.1);
    }
  }

  h2 {
    color: black;
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 20%;
    z-index:10;
    text-align:center;
    font-family: 'Concert One', cursive;
  }

  p {
    margin:15% 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  p, button {
    font-family: 'Acme', sans-serif;
    z-index:10;
  }
`

const InnerContainer = styled.div`
  padding: 12% 6%;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 4px;
  box-shadow: 0px 1px 6px 2px rgb(128, 127, 127);
  display:block;
  position:relative;
  background:white;
  overflow:hidden;
  width:19%;

  @media screen and (max-width: 900px) {
    width:26%;

    h2 {
      font-size:1.8rem;
    }
  }

  @media screen and (max-width: 750px) {
    height:45vh;

    h2 {
      padding-top:15%;
      font-size:1.5rem;
    }
  }
`

const NavButtons = styled.div `
  display:flex;
  align-items:center;
  flex-direction:column;
  height:40vh;
  justify-content:space-evenly;
`

const BackDrop = styled.div`
  position: absolute;
  display:flex;
  flex-direction: column;
  border-radius: 50%;
  width: 160%;
  height: 50vh;
  top: -25%;
  right: -20%;
  background-image: linear-gradient(to bottom right, #FE4880, #FFCE00);

  &:hover {
    transform:scale(1.02);
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;

  animation: ${kf} .8s ease-in-out forwards;
`

//end style


function Homepage() {
    const history = useHistory()

    const routeToLogin = () => {
        history.push('/login')
    }

    const routeToRegister = () => {
        history.push('/createuser')
    }

    return (
        <HomeContainer>
            <InnerContainer>
                <BackDrop></BackDrop>
                <NavButtons>
                    <h2>Welcome to<br/> Use My Tech Stuff!</h2>
                    <p>Please either:</p>
                    <button onClick={routeToLogin}>Login</button>
                    <p>or</p>
                    <button onClick={routeToRegister}>Register</button>
                </NavButtons>
            </InnerContainer>
        </HomeContainer>
    )
}

export default Homepage;