const express = require('express');
const app = express();
const router = express.Router()
const Customer = require('../Models/user.model');
const { signupPage, registerFunction, getProfile, login, getAllUsers } = require('../Controllers/user.controller');

router.get('/signup', signupPage)

// register route
router.post("/register", registerFunction );


router.get('/signin', (req, res) =>{
    res.render('index')
    console.log("SignIn Accessed");
})
router.post("/login", login)
// profile route
router.get('/profile', getProfile);

router.get('/allusers', getAllUsers);

module.exports = router