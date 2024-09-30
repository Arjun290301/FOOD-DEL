import restaurantModel from "../models/restaurantModel.js";
import fs from "fs";

// Add a new restaurant
const addRestaurant = async (req, res) => {
    try {
        console.log("Received file:", req.file); // Logging the uploaded file for debugging

        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const image_filename = `${req.file.filename}`;

        const restaurant = new restaurantModel({
            name: req.body.name,
            address: req.body.address,
            contactNumber: req.body.contactNumber,
            category: req.body.category,
            image: image_filename
        });

        await restaurant.save();
        res.status(201).json({ success: true, message: "Restaurant Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

// List all restaurants
const listRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurantModel.find({});
        res.json({ success: true, data: restaurants });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching restaurants" });
    }
};

// Remove a restaurant
const removeRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurantModel.findById(req.body.id);

        // Delete the associated image from uploads
        fs.unlink(`uploads/${restaurant.image}`, () => {});

        // Remove restaurant from database
        await restaurantModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Restaurant removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing restaurant" });
    }
};

export { addRestaurant, listRestaurants, removeRestaurant };
