import React, { useState } from 'react';
import { axiosWithAuth } from './../../axiosWithAuth';

const Renter = () => {
  const [equipmentList, setEquipmentList] = useState([]);

  axiosWithAuth()
    .get(`/api/equipment`)
    .then((res) => {
      console.log(res.data);
      setEquipmentList(res.data);
    })
    .catch((error) => console.log(error));

  return (
    <div>
      {equipmentList.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <a href={item.imgUrl} />
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Renter;
