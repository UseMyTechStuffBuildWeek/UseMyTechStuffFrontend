import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../axiosWithAuth';
import { useHistory } from 'react-router';
import { getEquipment } from '../../Actions/TechStuffActions';
import { connect } from 'react-redux';
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
    width: 7rem;
    height: 2.3rem;
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

const Owner = (props) => {
  const [equipmentList, setEquipmentList] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    axios
      .get('https://use-my-tech-app.herokuapp.com/api/equipment')
      .then((res) => {
        console.log(res.data);
        setEquipmentList(res.data);
        props.getEquipment(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteEquipment = (id) => {
    setEquipmentList(equipmentList.filter((equipment) => equipment.id !== id));
  };

  const deleteItem = (item) => {
    axiosWithAuth()
      .delete(`/api/equipment/${item.id}`)
      .then((res) => {
        console.log(res);
        deleteEquipment(item.id);
      })
      .catch((err) => console.log(err));
  };


  return (
    <StyledDiv>
      <div>
        <button onClick={() => push(`/addequipment`)}>Add New</button>
      </div>
      {equipmentList.map((item) => {
        return (
          <StyledDiv>
            <h2>{item.name}</h2>
              <img src={item.imgUrl} />
              <StyledContainer>
                <h3>{item.description}</h3>
                  <StyledBtnContainer>
                      <button onClick={() => deleteItem(item)}>Delete Item</button>
                      <button onClick={() => push(`/editequipment/${item.id}`)}>Edit Item</button>
                  </StyledBtnContainer>
            </StyledContainer>
          </StyledDiv>
        );
      })}
    </StyledDiv>
  );
};

export default connect(null, { getEquipment })(Owner);
