const express = require('express');
const { getProductById, getProducts } = require('../controller/product-controller.js');
const { userSignUp, userLogIn } = require('../controller/user-controller.js');

const router = express.Router();

// login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);



module.exports = router;  
