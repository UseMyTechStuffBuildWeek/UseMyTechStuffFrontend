import axios from 'axios';
import React, { useState } from 'react';
import { axiosWithAuth } from './../../axiosWithAuth';

export default class NewItem extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios.get(`/api/equipment`).then((res) => {
      console.log(res.data);
      this.setState({ items });
    });
  }

  deleteItem(id, e) {
    axios.delete(`/api/equpment/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);

      const items = this.state.items.filter((item) => item.id !== id);
      this.setState({ items });
    });
  }
}

// const Owner = () => {
//   const [equipmentList, setEquipmentList] = useState([]);

//   axiosWithAuth()
//     .get('/api/equipment')
//     .then((res) => {
//       console.log(res.data);
//       setEquipmentList(res.data);
//     })
//     .catch((error) => console.log(error));

//   const deleteItem = (item) => {
//     axiosWithAuth()
//       .delete(`/api/equipment/${item.id}`)
//       .then((res) => {
//         console.log(res);
//         const newItem = this.state.
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//   };

return (
  <div>
    {equipmentList.map((item) => {
      return (
        <div>
          <p>{item.name}</p>
          <a href={item.imgUrl} />
          <p>{item.description}</p>
          <button onClick={(e) => this.deleteItem(item.id, e)}>
            Delete Item
          </button>
        </div>
      );
    })}
  </div>
);

export default Owner;
