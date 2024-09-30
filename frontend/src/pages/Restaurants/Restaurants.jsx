import React, { useContext } from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import { StoreContext } from '../../context/StoreContext';
import './Restaurants.css';

const Restaurants = () => {
    const { restaurant_list } = useContext(StoreContext); // Access restaurant list from context

    return (
        <div className='restaurants'>
            <h2>Restaurants Near You</h2>
            <div className="restaurant-list">
                {restaurant_list.map((restaurant, index) => (
                    <RestaurantItem
                        key={index}
                        name={restaurant.name}
                        address={restaurant.address}
                        contactNumber={restaurant.contactNumber}
                        category={restaurant.category}
                        image={restaurant.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Restaurants;

