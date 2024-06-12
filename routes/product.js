const express = require('express');
const productRouter = express.Router();

const { products, peoples } = require('../data.js');


module.exports = { productRouter };