import express from "express";
import multer from "multer";
import { addRestaurant, listRestaurants, removeRestaurant } from "../controllers/restaurantController.js";

const restaurantRouter = express.Router();

// Image storage engine for multer
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Routes
restaurantRouter.post("/add", upload.single("image"), addRestaurant);
restaurantRouter.get("/list", listRestaurants);
restaurantRouter.post("/remove", removeRestaurant);

export default restaurantRouter;
