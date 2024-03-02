//require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const ProductRoutes = require('./routes/routes');

connectDB();
const app = express();
app.use(express.json());
app.use('/api/products', ProductRoutes);


//================ SIGN UP BACKEND SETUP ================================================
// Define User Schema
const signupUserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  mobile: String,
});

const SignupUserData = mongoose.model('books-user-signup-data', signupUserSchema);

// Middleware
app.use(cors()); // cross origin resource sharing (like from flipkart to any payment gateway such as paypal)
app.use(express.json());

// Signup Route
app.post('/api/signup', async (req, res) => {  
  const signupObjData = req.body.signupUserData;  
  const { email, password, name, mobile } = signupObjData;
  console.log('----------------', email, password, name, mobile);
  try {    
    const newUser = new SignupUserData({email, password, name, mobile});
    console.log('->', newUser);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));