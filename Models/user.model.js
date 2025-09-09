const mongoose = require('mongoose');
// Define schema
const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: [true,"Email has been taken,please choose another one" ]},
  password: { type: String, required: true }, 
});

// Create model
const Customer = mongoose.model("Customer", customerSchema);

module.exports= Customer