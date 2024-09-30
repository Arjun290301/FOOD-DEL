import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const Fooditeam = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={url + "/images/" + image} alt='img' />
                {!cartItems[id]
                    ? <FontAwesomeIcon className='add' onClick={() => addToCart(id)} icon={faCirclePlus} size='2x' /> :
                    <div className="food-item-counter">
                        <FontAwesomeIcon onClick={() => addToCart(id)} icon={faCirclePlus} />
                        <p>{cartItems[id]}</p>
                        <FontAwesomeIcon onClick={() => removeFromCart(id)} icon={faCircleMinus} />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">
                    {description}
                </p>
                <p className="food-item-price">
                    Rs {price}
                </p>
            </div>

        </div>
    )
}

export default Fooditeam
