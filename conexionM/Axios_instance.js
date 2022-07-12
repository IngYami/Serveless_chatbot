let axios = require('axios');

const API_DB = axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 10000,
})

const ENDPOINTS_PRODUCTS = {
    GET_PRODUCTS: '/getProducts',
}

const ENDPOINTS_CARTS = {
    GET_CART: '/getCart',
    POST_CART: '/postCart',
    PUT_USER_DETAILS: '/detalleUsers',
    PUT_PRODUCTS_CART: '/putProductsCart',
    PUT_TOTAL_AMOUNT: '/putTotalAmount',
    DELETE_CART: '/deleteCart' 
}

module.exports = {
    API_DB,
    ENDPOINTS_PRODUCTS,
    ENDPOINTS_CARTS
}
