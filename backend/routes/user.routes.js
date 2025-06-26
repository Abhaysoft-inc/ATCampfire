const express = require("express")
const router = express.Router()
const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()


const JWT_SECRET = process.env.JWT_SECRET;

router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    // Check if required fields are provided
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email, and password are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 5);

        // Check if user already exists by username or email
        const existingUser = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "Username or email already exists" });
        }

        // Create new user
        const newUser = new userModel({
            username,
            email,
            password: hashedPassword
        });

        // Save user to database
        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            userId: savedUser._id
        });

    } catch (err) {
        res.status(500).json({
            message: "Error creating user",
            error: err.message
        });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ "username": email });
        if (!user) {
            return res.status(403).json({ error: "email or password is incorrect" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(403).json({ error: "email or password is incorrect" });
        }

        const token = jwt.sign({ id: user._id, email: user.username }, JWT_SECRET);

        res.status(200).json({
            message: "Login Success",
            token: token
        });


    } catch (err) {
        res.status(500).json({
            message: "Error during login",
            error: err.message
        });
    }
})


module.exports = router