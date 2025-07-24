import React, { useContext } from 'react';
import './foodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import CompItem from '../CompItem/CompItem';
import FrontendLoader from '../FrontendLoader/FrontendLoader';

const FoodDisplay = ({ category, searchquery }) => {
  const { JewellryData, LoaderF } = useContext(StoreContext);

  const filteredlist = JewellryData.filter(item => {
    const queryWords = searchquery.toLowerCase().split(/\s+/); 
    const name = item.name.toLowerCase();
    const description = item.description ? item.description.toLowerCase() : "";
    const itemCategory = item.category ? item.category.toLowerCase() : "";
    const id = item._id.toLowerCase();
    return (
      searchquery === "" ||
      queryWords.some(word =>
        name.includes(word) || description.includes(word) || itemCategory.includes(word) || id.includes(word)
      )
    );
  }).filter(item => category === "All" || category === item.category);

  return (
    <div className='Item-display' id='Item-display'>
      <h2>Top Items</h2>
      {LoaderF ? (
        <FrontendLoader />
      ) : (
        <div className="Item-display-list">
          {filteredlist.length > 0 ? (
            filteredlist.map((item, index) => (
              <CompItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                stock={item.stock}
              />
            ))
          ) : (
            <div style={{marginTop:"20px",fontSize:"20px"}}>No data to show</div>
          )}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
