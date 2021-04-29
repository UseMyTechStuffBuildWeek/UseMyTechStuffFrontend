import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../axiosWithAuth';
import { useHistory } from 'react-router';
import { getEquipment } from '../../Actions/TechStuffActions';
import { connect } from 'react-redux';

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
      <button onClick={() => push(`/addequipment`)}>Add Item</button>
      {equipmentList.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <img src={item.imgUrl} />
            <p>{item.description}</p>
            <button onClick={() => deleteItem(item)}>Delete Item</button>
            <button onClick={() => push(`/editequipment/${item.id}`)}>Edit Item</button>
            
          </div>
        );
      })}
    </div>
  );
};

export default connect(null, { getEquipment })(Owner);
