import axios from 'axios'

const productFetch = axios.create({
    baseURL: "https://api-register-product.onrender.com/api/",
    headers: {
        "Content-Type": "application/json"
    }
})

export default productFetch