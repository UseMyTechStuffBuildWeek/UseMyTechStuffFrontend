import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
          <div>
            <p>{item.name}</p>
            <img src={item.imgUrl} />
            <p>{item.description}</p>
            <br></br>
            <button>Rent This Item</button>
          </div>
        );
      })}
    </div>
  );
};
export default Renter;
