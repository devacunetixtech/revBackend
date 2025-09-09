const Customer = require('../Models/user.model');

const signupPage = (req, res) =>{
    res.render('signUp')
    console.log("SignUp Accessed");
}

const registerFunction = async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.redirect(`/profile?id=${newCustomer._id}`); // pass ID
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user.");
  }
}

const login =  (req, res) => {
    res.send('User logged-in successfully!');
    console.log("User login");
}
const getProfile = (req, res) => {
  Customer.findById(req.query.id)
    .then((customer) => {
      res.render('dashboard', { customer });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error.");
    });
}

const getAllUsers = async (req, res) =>{
    let users = await Customer.find()
    res.send({message:'Users fetched successfully', users})
}
module.exports = {signupPage, registerFunction, login, getProfile, getAllUsers }