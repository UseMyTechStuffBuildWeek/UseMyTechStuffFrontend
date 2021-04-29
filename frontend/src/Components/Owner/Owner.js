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
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1%;
  }

  h3 {
    font-size: 1.5rem;
  }

  button {
    border-radius: 8px;
    width: 6rem;
    height: 2rem;
    cursor: pointer;
    background-color: #F8F8F8; 
    font-weight:700;

    &:hover {
            background-image: linear-gradient(to bottom, #FE4880, #FFCE00);
        }
  }
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: 2%;
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
    <div>
      {equipmentList.map((item) => {
        return (
          <StyledDiv>
            <h2>{item.name}</h2>
              <img src={item.imgUrl} />
              <StyledContainer>
                <h3>{item.description}</h3>
                <button onClick={() => deleteItem(item)}>Delete Item</button>
                <button onClick={() => push(`/editequipment/${item.id}`)}>
                  Edit Item
                </button>
            </StyledContainer>
          </StyledDiv>
        );
      })}
    </div>
  );
};

export default connect(null, { getEquipment })(Owner);
