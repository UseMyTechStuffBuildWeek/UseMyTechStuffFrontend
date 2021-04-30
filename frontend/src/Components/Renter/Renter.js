import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: gray;

  img{
    width: 50%;
    position: center;
    object-fit: contain;
    border-radius: 2%;
    height: 60vh;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1%;
  }

  h3 {
    font-size: 1.5rem;
    margin-right:1rem;
  }

  button {
    border-radius: 8px;
    width: 8rem;
    height: 2.9rem;
    cursor: pointer;
    background-color: lightgrey; 
    padding: 4%;
    font-size:.9rem;
    font-weight:600;

    &:hover {
            background-image: linear-gradient(to bottom, #FE4880, #FFCE00);
        }
  }
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin: 2%;
`
const StyledBtnContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

const Renter = () => {
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://use-my-tech-app.herokuapp.com/api/equipment`)
      .then((res) => {
        console.log(res.data);
        setEquipmentList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {equipmentList.map((item) => {
        return (
          <StyledDiv>
            <h2>{item.name}</h2>
            <img src={item.imgUrl} />
            <StyledContainer>
            <h3>{item.description}</h3>
            <StyledBtnContainer>
              <button onClick={() => {alert('Your item has been rented!')}}>Rent This Item</button>
            </StyledBtnContainer>
            </StyledContainer>
          </StyledDiv>
        );
      })}
    </div>
  );
};
export default Renter;
