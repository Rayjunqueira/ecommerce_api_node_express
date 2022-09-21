const express = require('express');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const customerRoutes = require('./routes/customerRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser());

app.use('/customer', customerRoutes);
app.use('/auth', authRoutes);;
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);
app.use('/review', reviewRoutes);

module.exports = app;
