import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url }) => {

    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    const validateForm = () => {
        const { name, description, price } = data;
        if (!name || !description || !price || !image) {
            toast.error("Please fill in all fields and upload an image.");
            return false;
        }
        if (price <= 0) {
            toast.error("Price must be greater than zero.");
            return false;
        }
        return true;
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!validateForm()) return; // Validate the form before proceeding

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);

        try {
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.data.success) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Salad"
                });
                setImage(null);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("An error occurred while adding the product.");
        }
    };

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' required />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write content here' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} name='category'>
                            <option value="Salad">Salad</option>
                            <option value="Roll">Roll</option>
                            <option value="Desert">Desert</option>
                            <option value="Biriyani">Biriyani</option>
                            <option value="Fried Rice">Fried Rice</option>
                            <option value="Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                            <option value="Meals">Meals</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='$20' required />
                    </div>
                </div>
                <button type='submit' className='add-btn'>Add</button>
            </form>
        </div>
    );
};

export default Add;
