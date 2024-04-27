const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

//signup route
userRouter.post('/signup', async (req, res) => {
    try {
        const {firstName, lastName, username, password} = req.body;
        if (!firstName || !lastName || !username || !password) {
            return res.status(400).json({msg: "Please enter all of the fields."});
        }
        if (password.length < 6) {
            return res
                .status(400)
                .json({msg: "Password should be at least 6 characters"});
        }

        const existingUser = await User.findOne({username});
        if (existingUser) {
            return res
            .status(400)
            .json({msg: "User with the same username exists"});
        }

        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({firstName, lastName, username, password: hashedPassword});
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
});

//login route

userRouter.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(400).json({msg: "Please enter all of the fields."});
        }
        const user = await User.findOne({username});
        if (!user) {
            return res.status(400).send({msg: "User with this username does not exist"});
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({msg: "Incorrect password."});
        }
        const token = jwt.sign({id: user._id}, "helloworld");
        res.send({token, user: {id: user._id, username: user.username}});
    } catch (err) {
       return res.status(500).json({error: err.message});
    }

})

userRouter.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.json(false);
        const verified = jwt.verify(tokenParts[1], "helloworld");
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
});

module.exports = userRouter;