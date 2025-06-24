const express = require("express")
const router = express.Router()
const userModel = require("../model/user.model");
const bcrypt = require("bcrypt")

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" })
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    // Check if user already exists
    userModel.findOne({ username })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({ message: "Username already exists" })
            }



            // Create new user
            const newUser = new userModel({
                username,
                password: hashedPassword
            })

            // Save user to database
            newUser.save()
                .then(user => {
                    res.status(201).json({
                        message: "User created successfully",
                        userId: user._id
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        message: "Error creating user",
                        error: err
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: "Error checking existing user",
                error: err
            })
        })




})

module.exports = router