import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
// import * as yup from 'yup';
// import schema from './FormSchema';
import '../App.css';
import Form from './Form';



export default function App() {
    const [itemList, setItemList] = useState([]);
    const [item, setItem] = useState ([]);

    useEffect(() => {                            // getting Owners current items //
      const getItems = () => {
        axios
            .get('https://use-my-tech-app.herokuapp.com/api/equipment')
            .then(res => {
                setItemList(res.data);
                console.log(itemList);
            })
            .catch(err => {
                console.error('Server Error', err);
            })
    }
    getItems();
  }, []);


    return (
      <Router>
        <div>
          <Switch>
              <Route exact path ='/'>     {/* Item Selector */}
                <h1>Select an Item to Edit!</h1>
                <div>
                  {itemList.map(item => {

                     if(!item) {return <h2>Loading...</h2>}
                      
                    return (
                      <div key={item.equipment_id}>
                        <Link to={`/item/${item.equipment_id}`}>
                          <h2>{item.name}</h2>
                          <h4>{item.equipment_description}</h4>
                          <h4>{item.equipment_img}</h4>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </Route>
              <Route path={'/item/:itemID'}>
                <Form items={itemList} />  {/*Form Loads when User selects and item to edit */}
              </Route>
          </Switch>
        </div>
      </Router>
    );
}

