const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')

const JWT_SECRECT = 'Monishaisagoodg!irl';


// ROUTE 1 : Create a user using : POST ('/api/auth/createuser') No login required, which doesn't require authorization
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be of atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {
    let success = false;
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    try {
        // Check whether the user with this email exists already.
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(404).json({success, error: "Sorry a user with this emailID already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt); // secrect passowrd
        // Create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });
        const data = {
            user : {
                id : user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRECT);
        
        // res.json(user)
        success = true;
        res.json({success,authtoken})
    } catch (error) {
        console.error(error.message);
        res.send(500).send("Internal Server Error")
    }
})


// ROUTE 2 : Authentication a User using : POST "/api/auth/login". NO login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            success = false
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            success = false;
            return res.status(400).json({success, error: "Please try to login with correct credentials"});
        }

        const data = {
            user : {
                id : user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRECT);
        success = true;
        res.json({success, authtoken})
    } catch (error) {
        console.error(error.message);
        res.send(500).send("Internal Server Error")
    }
})


// ROUTE 3 : Get loggedin User details using : POST "/api/auth/getuser".login required
router.post('/getuser',fetchuser, async (req, res) => {

try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
    
} catch (error) {
    console.error(error.message);
    res.send(500).send("Internal Server Error")
}
})

module.exports = router