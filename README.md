Tummylicious Food Delivery App
Tummylicious is a full-stack food delivery application built using the MERN stack (MongoDB, Express, React, and Node.js). The app provides customers with the ability to browse food items, add them to a cart, place orders, and make payments via Stripe. Admins can manage restaurants, food items, and view customer orders.

Features
Customer Features:
Browse food menu and view restaurant details.
Add or remove food items to/from cart.
Place orders and make payments securely via Stripe.
View order history.
Admin Features:
Manage food items (Add, Remove, List).
Manage restaurants (Add, List).
View customer orders and update order status.
Tech Stack:
Frontend: React, React Router, Context API for state management.
Backend: Node.js, Express.js, MongoDB, Mongoose for database interactions.
Authentication: Token-based authentication using JWT (JSON Web Tokens).
Authorization: Middleware for role-based access control (Admin and User).
Payments: Stripe integration for secure payment handling.
Project Structure
Frontend
The frontend folder consists of:

components: Reusable components like Navbar, Header, ExploreMenu, etc.
pages: Various pages such as Cart, Home, My Orders, Place Order, etc.
context: StoreContext for handling global state using React Context API.
routes: Routing for different components and pages.
Admin Panel
The admin folder consists of:

components: Navbar and Sidebar for admin navigation.
pages: Pages like Add Food, Add Restaurant, Orders, and List.
Backend
The backend includes:

controllers: Business logic for handling food, order, user, cart, and restaurant requests.
models: Mongoose models for food items, orders, users, and restaurants.
routes: API endpoints for handling HTTP requests.
middleware: Authentication middleware using JWT tokens.
API Endpoints
Here are the key backend API routes used in the application:

Food API
Add Food: POST /api/food/add
List Food: GET /api/food/list
Remove Food: DELETE /api/food/remove
User API
Register: POST /api/user/register
Login: POST /api/user/login
Cart API
Add to Cart: POST /api/cart/add
Remove from Cart: DELETE /api/cart/remove
Get Cart Items: GET /api/cart/get
Order API
Place Order: POST /api/order/userorders
List Orders: GET /api/order/list
Update Order Status: PATCH /api/order/status
Restaurant API
Add Restaurant: POST /api/restaurant/add
Backend Deployment
The backend of the app has been deployed to Render. You can access the live backend API at:

Backend URL: https://food-del-backend-lwr7.onrender.com
Example API Endpoints for Deployed Backend:
POST https://food-del-backend-lwr7.onrender.com/api/food/add
GET https://food-del-backend-lwr7.onrender.com/api/food/list
POST https://food-del-backend-lwr7.onrender.com/api/user/register
Installation and Setup
Frontend Setup:
Navigate to the frontend folder.
Run npm install to install all dependencies.
Run npm start to start the React frontend at http://localhost:3000.
Admin Setup:
Navigate to the admin folder.
Run npm install to install admin dependencies.
Run npm start to start the admin panel.
Backend Setup:
Navigate to the backend folder.
Run npm install to install all backend dependencies.
Create a .env file with the following environment variables:
bash
Copy code
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
Run npm start to start the backend server at http://localhost:4000.
Usage
Register as a user using the Sign Up page.
Log in to the app, browse food items, and place an order.
Admin can log in and access the admin dashboard to manage restaurants and orders.
Libraries and Dependencies
Frontend:
react-router-dom: For handling routing within the React app.
context-api: For managing global state across components.
axios: For making HTTP requests to the backend.
Backend:
express: Node.js framework for creating APIs.
mongoose: MongoDB ORM for managing data models.
jsonwebtoken: For authentication and generating secure tokens.
bcryptjs: For password hashing.
stripe: For handling payment processing.
Future Enhancements
Add more filtering and sorting options for food items.
Improve admin features for better order management.
Add user profile page with address and payment method management.
