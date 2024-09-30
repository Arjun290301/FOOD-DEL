import React, { useContext } from 'react';

import './RestaurantItem.css';
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const RestaurantItem = ({ name, address, contactNumber, category, image }) => {
    const navigate = useNavigate();
    const { url } = useContext(StoreContext)
    return (
        <div onClick={() => navigate("/food-display", { state: { category } })} className='restaurant-item'>
            <img src={`${url}/images/${image}`} alt={name} className='restaurant-img' />
            <div className='restaurant-details'>
                <h3>{name}</h3>
                <p>{address}</p>
                <p>Contact: {contactNumber}</p>
                <p>Category: {category}</p>
            </div>
        </div>
    );
};

export default RestaurantItem;
