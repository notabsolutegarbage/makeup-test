import axios from "axios";

export const client = axios.create ({
    baseURL:"https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick"
})