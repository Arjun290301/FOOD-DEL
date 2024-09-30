import { createContext, useEffect, useState } from "react";

import axios from "axios"
export const StoreContext = createContext(null)

const storeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const [restaurant_list, setRestaurantList] = useState([]);
    const url = "https://food-del-backend-lwr7.onrender.com";
    const [token, setToken] = useState("")
    const [food_list, setFoodlist] = useState([])
    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
        }

    }
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }


        }
        return totalAmount;
    }
    const fetchFoodlist = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodlist(response.data.data)
    }
    const fetchRestaurantList = async () => {
        const response = await axios.get(url + "/api/restaurant/list");
        setRestaurantList(response.data.data); // Set restaurant list
    };

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } })
        setCartItems(response.data.cartData)
    }


    useEffect(() => {

        async function loadData() {
            await fetchFoodlist();
            await fetchRestaurantList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    }, [])
    const contextValue = {
        food_list,
        restaurant_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default storeContextProvider;
