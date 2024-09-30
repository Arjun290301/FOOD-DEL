import React, { useState } from 'react';
import './AddRestaurant.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddRestaurant = ({ url }) => {

    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        address: "",
        contactNumber: "",
        category: "Fast Food"
    });


    const validateForm = () => {
        const { name, address, contactNumber } = data;
        if (!name || !address || !contactNumber || !image) {
            toast.error("Please fill in all fields and upload an image.");
            return false;
        }
        if (contactNumber.length < 10) {
            toast.error("Contact number must be at least 10 digits.");
            return false;
        }
        return true;
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!validateForm()) return; // Validate the form before proceeding

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("address", data.address);
        formData.append("contactNumber", data.contactNumber);
        formData.append("category", data.category);
        formData.append("image", image);

        try {
            const response = await axios.post(`${url}/api/restaurant/add`, formData);
            if (response.data.success) {
                setData({
                    name: "",
                    address: "",
                    contactNumber: "",
                    category: "Fast Food"
                });
                setImage(null);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("An error occurred while adding the restaurant.");
        }
    };

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className='add-restaurant'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
                </div>
                <div className="add-restaurant-name flex-col">
                    <p>Restaurant Name</p>
                    <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Restaurant name' required />
                </div>
                <div className="add-restaurant-address flex-col">
                    <p>Restaurant Address</p>
                    <textarea onChange={onChangeHandler} value={data.address} name='address' rows="4" placeholder='Enter address here' required></textarea>
                </div>
                <div className="add-category-contact">
                    <div className="add-category flex-col">
                        <p>Category</p>
                        <select onChange={onChangeHandler} name='category'>
                            <option value="Fast Food">Fast Food</option>
                            <option value="Fine Dining">Fine Dining</option>
                            <option value="Cafe">Cafe</option>
                            <option value="Street Food">Street Food</option>
                            <option value="Casual Dining">Casual Dining</option>
                        </select>
                    </div>
                    <div className="add-contact flex-col">
                        <p>Contact Number</p>
                        <input onChange={onChangeHandler} value={data.contactNumber} type='text' name='contactNumber' placeholder='Phone number' required />
                    </div>
                </div>
                <button type='submit' className='add-btn'>Add Restaurant</button>
            </form>
        </div>
    );
};

export default AddRestaurant;
