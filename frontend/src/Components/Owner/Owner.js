import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../axiosWithAuth';

const Owner = () => {
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    axios
      .get('https://use-my-tech-app.herokuapp.com/api/equipment')
      .then((res) => {
        console.log(res.data);
        setEquipmentList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteItem = (item) => {
    axiosWithAuth()
      .delete(`/api/equipment/${item.id}`)
      .then((res) => {
        console.log(res);
        const newItem = equipmentList.filter((item) => {
          return item.id !== item.id;
        });
        setEquipmentList(newItem);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {equipmentList.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <img src={item.imgUrl} />
            <p>{item.description}</p>
            <button onClick={deleteItem}>Delete Item</button>
          </div>
        );
      })}
    </div>
  );
};

export default Owner;
